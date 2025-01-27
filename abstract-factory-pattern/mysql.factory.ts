import { DatabaseConnection, DatabaseFactory, DatabaseOperations, TData, TResource } from "./types.ts";

// -- Product Classes -- //

class MysqlConnection implements DatabaseConnection {
  connect(): void {
    console.log("Connection to Mysql has been established");
  }
}

class MysqlOperations implements DatabaseOperations {
  create(data: TData): TResource {
    console.log("Creating item with", data);
    const item: TResource = {};
    return item;
  }

  read(query: TData): TResource {
    console.log("Reading item with query", query);
    const item: TResource = {};
    return item;
  }

  update(id: string, data: TData): TResource {
    console.log(`Updating item with ${id} and data ${JSON.stringify(data)}`);
    const item: TResource = {};
    return item;
  }

  delete(id: string): void {
    console.log(`Deleting item with ${id}`);
  }
}

// -- Factory for MySQL -- //
export class MysqlFactory implements DatabaseFactory {
  connection() {
    return new MysqlConnection();
  }
  operations() {
    return new MysqlOperations();
  }
}
