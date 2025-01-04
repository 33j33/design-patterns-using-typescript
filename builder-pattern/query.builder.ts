import { Query } from "./types.ts";

export class QueryBuilder {
  private query: Partial<Query> = {};

  select(columns: string) {
    this.query.select = this._getEntities(columns);
    return this;
  }

  from(tables: string) {
    this.query.from = this._getEntities(tables);
    return this;
  }
  groupBy(columns: string) {
    this.query.groupBy = this._getEntities(columns);
    return this;
  }
  orderBy(columns: string) {
    this.query.orderBy = this._getEntities(columns);
    return this;
  }
  join(table: string, condition: string) {
    if (!this.query.joins) this.query.joins = [];
    this.query.joins.push(`JOIN ${table} ON ${condition}`);
    return this;
  }
  where(condition: string) {
    if (!this.query.where) this.query.where = [];
    this.query.where.push(condition);
    return this;
  }
  private _getEntities(entities: string) {
    if (entities.length == 0) throw new Error("bad input");
    return entities.split(", ");
  }
  build() {
    if (!this.query.select || !this.query.from) {
      throw new Error("SELECT and FROM clauses are mandatory.");
    }

    const parts = [
      `SELECT ${this.query.select.join(", ")}`,
      `FROM ${this.query.from.join(", ")}`,
    ];
    if (this.query.joins?.length) parts.push(this.query.joins.join(" "));
    if (this.query.where?.length) {
      parts.push("WHERE " + this.query.where.join(" AND "));
    }
    if (this.query.groupBy?.length) {
      parts.push("GROUP BY " + this.query.groupBy.join(", "));
    }
    if (this.query.orderBy?.length) {
      parts.push("ORDER BY " + this.query.orderBy.join(", "));
    }
    return parts.join("\n");
  }
}
