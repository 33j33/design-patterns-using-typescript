import { ApiClient } from "./apiClient.ts";
import { StripeLogger } from "./errorHandler.ts";
import { PaymentValidator } from "./paymentValidator.ts";
import { RetryHandler } from "./retryHandler.ts";
import { PaymentRequest, PaymentResponse } from "./types.ts";

export class StripeFacade {
  constructor(
    private validator: PaymentValidator,
    private apiClient: ApiClient,
    private retryHandler: RetryHandler,
    private logger: StripeLogger,
  ) {}

  async processPayment(payment: PaymentRequest): Promise<PaymentResponse> {
    try {
      this.validator.validate(payment);
      return await this.retryHandler.execute(
        () => this.apiClient.charge(payment),
      );
    } catch (error) {
      this.logger.logError(error as Error);
      throw error; // Re-throw for client handling
    }
  }
}
