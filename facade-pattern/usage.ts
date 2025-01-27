import { ApiClient } from "./apiClient.ts";
import { StripeLogger } from "./errorHandler.ts";
import { PaymentValidator } from "./paymentValidator.ts";
import { RetryHandler } from "./retryHandler.ts";
import { StripeFacade } from "./stripe.facade.ts";
import { PaymentRequest } from "./types.ts";

const stripe = new StripeFacade(new PaymentValidator(), new ApiClient(), new RetryHandler(), new StripeLogger());

const paymentRequest: PaymentRequest = {
  amount: 9999, // $99.99
  currency: "usd",
  cardNumber: "4242424242424242",
  expMonth: 12,
  expYear: 2026,
  cvc: "123",
};

try {
  const result = await stripe.processPayment(paymentRequest);
  console.log(`Payment ${result.id} succeeded: $${result.amount / 100}`);
} catch (error) {
  console.log("Payment failed. Please try another card.", error);
}
