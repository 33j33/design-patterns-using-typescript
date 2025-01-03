// deno-lint-ignore no-explicit-any
export type TData = Record<string, any>;
// deno-lint-ignore no-explicit-any
export type TResource = Record<string, any>;

// -- Product Interfaces -- //

export interface DatabaseConnection {
  connect(): void;
}

export interface DatabaseOperations {
  read(query: TData): TResource;
  delete(id: string): void;
  update(id: string, data: TData): TResource;
  create(data: TData): TResource;
}

// -- Abtrast Factory Interface -- //

export interface DatabaseFactory {
  connection(): DatabaseConnection;
  operations(): DatabaseOperations;
}
