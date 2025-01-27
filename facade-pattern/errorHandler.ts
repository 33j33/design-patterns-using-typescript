export class StripeLogger {
  logError(error: Error): void {
    console.error(`[STRIPE ERROR][${new Date().toISOString()}] ${error.message}`);
  }
}
