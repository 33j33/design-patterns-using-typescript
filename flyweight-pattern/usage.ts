import { ConnectionPoolManager } from "./connectionPoolManager.factory.ts";
import { DatabaseConfig } from "./types.ts";

async function main() {
  const config: DatabaseConfig = {
    host: "localhost",
    port: 5432,
    username: "user",
    password: "password",
    database: "econ-store",
  };
  const maxConnections = 5;

  const poolManager = ConnectionPoolManager.getInstance();

  try {
    // Simulate multiple connection requests
    const connections = await Promise.all([
      poolManager.getConnection(config, maxConnections),
      poolManager.getConnection(config, maxConnections),
      poolManager.getConnection(config, maxConnections),
    ]);

    console.log("Pool stats after getting connections:", poolManager.getPoolStats(config));

    // Release connections back to the pool
    connections.forEach(conn => {
      poolManager.releaseConnection(config, conn);
    });

    console.log("Pool stats after releasing connections:", poolManager.getPoolStats(config));
  } catch (error) {
    console.error("Error:", error);
  }
}
main();

/**
Connecting to econ-store at localhost:5432
Connecting to econ-store at localhost:5432
Connecting to econ-store at localhost:5432
Pool stats after getting connections: { totalConnections: 3, activeConnections: 3, availableConnections: 0 }
Pool stats after releasing connections: { totalConnections: 3, activeConnections: 0, availableConnections: 3 }
 */
