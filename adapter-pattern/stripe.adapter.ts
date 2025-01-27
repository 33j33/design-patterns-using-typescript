import { IPaymentProcessor, IStripe } from "./types.ts";

export class StripeAdapter implements IPaymentProcessor {
  constructor(private stripeService: IStripe) {
    this.stripeService = stripeService;
  }
  async processPayment(
    cc: string,
    amount: number,
    name: string
  ): Promise<{ transcationId: string; paid: boolean; timestamp: string }> {
    const transactionInfo = await this.stripeService.chargeCard(cc, amount);
    console.log(`transaction ${transactionInfo.chargeId} processed with status ${transactionInfo.status} for ${name}`);
    return {
      transcationId: transactionInfo.chargeId,
      paid: transactionInfo.status == "success",
      timestamp: transactionInfo.createdAt,
    };
  }
}
