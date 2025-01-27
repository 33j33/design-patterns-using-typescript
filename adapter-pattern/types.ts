// application's expected interface for payment processor
export interface IPaymentProcessor {
  processPayment(
    cc: string,
    amount: number,
    name: string
  ): Promise<{ transcationId: string; paid: boolean; timestamp: string }>;
}

// external service (stripe) interface
export interface IStripe {
  chargeCard(
    cc: string,
    amount: number
  ): Promise<{ status: "success" | "failed" | "pending"; chargeId: string; createdAt: string }>;
}
