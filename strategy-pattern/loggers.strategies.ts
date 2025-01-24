import { logStrategy } from "./types.ts";

// Concrete strategies which encapsulates functioning of each strategy
export class consoleLogger implements logStrategy {
  private levels: Record<string, (...args: unknown[]) => void>;
  constructor() {
    this.levels = {
      debug: console.debug,
      info: console.info,
      warn: console.warn,
      error: console.error,
    };
  }

  log(level: string, message: string, data: Record<string, unknown>) {
    const logFunction = this.levels[level.toLowerCase()] || console.log;
    logFunction(`[${level.toUpperCase()}] ${message}`, JSON.stringify(data));
  }
}

export class fileLogger implements logStrategy {
  fileName: string;
  constructor(file: string) {
    this.fileName = file;
  }
  log(level: string, message: string, data: Record<string, unknown>): void {
    console.log(
      `log: [${level.toLocaleUpperCase()}] ${message} | data: ${
        JSON.stringify(data)
      } written to file ${this.fileName}`,
    );
  }
}

export class cloudLogger implements logStrategy {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  log(level: string, message: string, data: Record<string, unknown>): void {
    console.log(
      `log: [${level.toLocaleUpperCase()}] ${message} | data: ${
        JSON.stringify(data)
      } written to ${this.url}`,
    );
  }
}
