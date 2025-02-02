// Flyweight Interface (Defines common operations for shared objects)
export interface DatabaseConnectionFlyweight {
  connect(): Promise<void>;
  getId(): string;
}

// Intrinsic State: Configuration that is shared across multiple connections
export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}
