export interface logStrategy {
  log(level: string, message: string, data: Record<string, unknown>): void;
}
