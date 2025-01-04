// -- Singleton Pattern using OOP design -- //

// Private Constructor: Prevents direct instantiation of the class.
// Static Getter (instance): Provides the single global access point.
// Static Property (_instance): Holds the single instance of the class.

export class Database {
  private static _instance: Database | null = null;

  private constructor() {}

  static get instance() {
    if (!Database._instance) throw new Error("connection not initialised");
    return Database._instance;
  }

  static connect(connectionUrl: string) {
    if (Database._instance) throw new Error("connection already initialised");
    console.log("connected to " + connectionUrl);
    Database._instance = new Database();
    return Database._instance;
  }

  query(sql: string): void {
    console.log(`Executing query: ${sql}`);
  }
}
