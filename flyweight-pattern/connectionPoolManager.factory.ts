import { DatabaseConnection } from "./dbConnection.flyweight.ts";
import { DatabaseConfig } from "./types.ts";

// Extrinsic State
class ConnectionState {
  public connection: DatabaseConnection;
  public inUse: boolean;
  constructor(connection: DatabaseConnection, inUse: boolean = false) {
    (this.connection = connection), (this.inUse = inUse);
  }
}

// Flyweight Factory: Manages shared database connections
export class ConnectionPoolManager {
  private static instance: ConnectionPoolManager;
  private connectionPools: Map<string, ConnectionState[]> = new Map();

  private constructor() {}

  // Singleton pattern: Ensures only one ConnectionPoolManager instance
  static getInstance(): ConnectionPoolManager {
    if (!ConnectionPoolManager.instance) {
      ConnectionPoolManager.instance = new ConnectionPoolManager();
    }
    return ConnectionPoolManager.instance;
  }

  private generateConfigKey(config: DatabaseConfig): string {
    return `${config.host}:${config.port}/${config.database}`;
  }

  // Get or create a connection from the pool (Flyweight retrieval)
  async getConnection(config: DatabaseConfig, maxConnections: number): Promise<DatabaseConnection> {
    const configKey = this.generateConfigKey(config);

    if (!this.connectionPools.has(configKey)) {
      this.connectionPools.set(configKey, []);
    }

    const pool = this.connectionPools.get(configKey)!;

    // find any connection not in use
    let connectionState = pool.find(connState => !connState.inUse);

    // If no connection is available and we haven't reached max connections, create new connection
    if (!connectionState && pool.length < maxConnections) {
      const newConnection = new DatabaseConnection(config);
      await newConnection.connect();
      connectionState = new ConnectionState(newConnection);
      pool.push(connectionState);
    }

    if (connectionState) {
      connectionState.inUse = true;
      return connectionState.connection;
    }

    throw new Error("No connections available in the pool");
  }

  // Release a connection back to the pool
  releaseConnection(config: DatabaseConfig, connection: DatabaseConnection): void {
    const configKey = this.generateConfigKey(config);
    const pool = this.connectionPools.get(configKey);

    if (pool) {
      const connectionState = pool.find(connState => connState.connection.getId() === connection.getId());
      if (connectionState) {
        connectionState.inUse = false;
      }
    }
  }

  getPoolStats(config: DatabaseConfig): {
    totalConnections: number;
    activeConnections: number;
    availableConnections: number;
  } {
    const configKey = this.generateConfigKey(config);
    const pool = this.connectionPools.get(configKey) || [];

    const totalConnections = pool.length;
    const activeConnections = pool.filter(connState => connState.inUse).length;

    return {
      totalConnections,
      activeConnections,
      availableConnections: totalConnections - activeConnections,
    };
  }
}
