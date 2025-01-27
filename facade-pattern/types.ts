export interface PaymentRequest {
  amount: number;
  currency: string;
  cardNumber: string;
  expMonth: number;
  expYear: number;
  cvc: string;
}

export interface PaymentResponse {
  id: string;
  amount: number;
  status: "succeeded" | "failed";
}
