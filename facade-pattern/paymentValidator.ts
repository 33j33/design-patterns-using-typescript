import { PaymentRequest } from "./types.ts";
// Stripe SDKs validate card formats (Luhn check) before making API calls
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
