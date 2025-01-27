import { PaymentRequest } from "./types.ts";

export class PaymentValidator {
  validate(request: PaymentRequest): void {
    if (!/^\d{16}$/.test(request.cardNumber)) {
      throw new Error("Invalid card number");
    }
    if (request.amount <= 0) {
      throw new Error("Amount must be positive");
    }
  }
}
