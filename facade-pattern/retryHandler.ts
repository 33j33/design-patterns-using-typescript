export class RetryHandler {
  private readonly maxRetries = 3;

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    let attempts = 0;

    while (attempts < this.maxRetries) {
      try {
        return await fn();
      } catch (error) {
        console.error(error);
        attempts++;
        if (attempts >= this.maxRetries) break;
      }
    }

    throw new Error("Max retries exceeded");
  }
}
