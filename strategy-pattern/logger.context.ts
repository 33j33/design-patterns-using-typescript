import { logStrategy } from "./types.ts";

export class Logger {
  strategies: logStrategy[] = [];
  level: string = "info";
  constructor(level?: string) {
    if (level) this.level = level;
    return this;
  }

  use(strategy: logStrategy) {
    this.strategies.push(strategy);
    return this;
  }
  log(message: string, data: Record<string, unknown>, level?: string) {
    this.strategies.forEach((s) => s.log(level || this.level, message, data));
  }
}
