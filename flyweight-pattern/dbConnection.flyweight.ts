import { DatabaseConfig } from "./types.ts";

// Concrete Flyweight Class: Represents a shared connection
export class DatabaseConnection implements DatabaseConnection {
  private connectionId: string;

  constructor(private config: DatabaseConfig) {
    this.connectionId = crypto.randomUUID();
  }

  // Simulate connecting to the database
  async connect(): Promise<void> {
    console.log(`Connecting to ${this.config.database} at ${this.config.host}:${this.config.port}`);
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  getId(): string {
    return this.connectionId;
  }
}
