// The strategy interface
// it declares operations common to all supported concrete strategies.
// The context uses this interface to call the algorithm defined by the concrete strategies.

export interface logStrategy {
  log(level: string, message: string, data: Record<string, unknown>): void;
}
