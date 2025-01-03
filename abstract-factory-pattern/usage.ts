import { MysqlFactory } from "./mysql.factory.ts";
import { PostgresFactory } from "./postgresql.factory.ts";
import {
  DatabaseConnection,
  DatabaseFactory,
  DatabaseOperations,
  TData,
} from "./types.ts";

class DataAccessLayer {
  private conn: DatabaseConnection;
  private op: DatabaseOperations;

  constructor(factory: DatabaseFactory) {
    this.conn = factory.connection();
    this.op = factory.operations();
  }
  init() {
    this.conn.connect();
  }
  create(data: TData) {
    return this.op.create(data);
  }
  update(id: string, data: TData) {
    return this.op.update(id, data);
  }
  read(query: TData) {
    return this.op.read(query);
  }
  delete(id: string) {
    return this.op.delete(id);
  }
}

const databaseType = "mysql";

const dal = databaseType === "mysql"
  ? new DataAccessLayer(new MysqlFactory())
  : new DataAccessLayer(new PostgresFactory());

dal.init();

dal.create({ name: "Ohn", age: 23 });
dal.read({ name: "Ohn" });
dal.update("gsd23gv", { age: 24 });
dal.delete("gsd23gv");
