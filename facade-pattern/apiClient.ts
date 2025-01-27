import { PaymentResponse, PaymentRequest } from "./types.ts";


export class ApiClient {
  private readonly baseUrl = "https://api.stripe.com/v1";
  
  charge(request: PaymentRequest): Promise<PaymentResponse> {
    // Simulate successful API call
    return Promise.resolve({
      id: `ch_${Math.random().toString(36).slice(2)}`,
      amount: request.amount,
      status: "succeeded"
    });
  }
}