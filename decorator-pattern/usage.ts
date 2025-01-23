import { required, validate } from "./class-validator.decorator.ts";
import { measure } from "./measure.decorator.ts";

// Example 1 - Using method decorator
class Database {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  @measure("debug")
  query(sql: string) {
    for (let i = 0; i < 10e6; i++) {
      continue;
    }
    console.log("query executed: " + sql);
  }
}

const db = new Database("postgresql");
db.query("SELECT * FROM USERS;");
/**
entering fn: 'query' | params: SELECT * FROM USERS; | 93.522292
query executed: SELECT * FROM USERS;
existing fn: 'query' | params: SELECT * FROM USERS; | 126.713459
execution time for 'query' fn: 33.19116700000001 ms
 */