import {
  DatabaseConnection,
  DatabaseFactory,
  DatabaseOperations,
  TData,
  TResource,
} from "./types.ts";

// -- Product Classes -- //

class PostgresConnection implements DatabaseConnection {
  connect(): void {
    console.log("Connection to Postgres has been established");
  }
}

class PostgresOperations implements DatabaseOperations {
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

// -- Factory for Postgres -- //

export class PostgresFactory implements DatabaseFactory {
  connection() {
    return new PostgresConnection();
  }
  operations() {
    return new PostgresOperations();
  }
}
