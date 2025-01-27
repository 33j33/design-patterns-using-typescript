import { StripeAdapter } from "./stripe.adapter.ts";
import { Stripe } from "./stripe.service.ts";
import { IPaymentProcessor } from "./types.ts";

const stripeService = new Stripe("myapp-4fjdnf33");

const paymentAdapter = new StripeAdapter(stripeService);

async function processOrderPayment(processor: IPaymentProcessor, data: { cc: string; amount: number; name: string }) {
  if (!data.amount) return;
  console.log("processing payment for " + data.name);
  await processor.processPayment(data.cc, data.amount, data.name);
}
processOrderPayment(paymentAdapter, {
  cc: "4032-4953-4313-1234",
  amount: 1000,
  name: "Meg",
});

processOrderPayment(paymentAdapter, {
  cc: "5143-4953-4313-1234",
  amount: 0.99,
  name: "Jim",
});

/**
 *
processing payment for Meg
trying to charge card 4032-4953-4313-1234 for amount 1000 for app myapp-4fjdnf33
processing payment for Jim
trying to charge card 5143-4953-4313-1234 for amount 0.99 for app myapp-4fjdnf33
transaction 7287094f-e89f-4c37-a9c8-1c32259b665c processed with status success for Meg
transaction  processed with status failed for Jim
 */
