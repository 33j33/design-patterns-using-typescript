import { IStripe } from "./types.ts";

export class Stripe implements IStripe {
  private appId: string;
  constructor(appId: string) {
    this.appId = appId;
  }
  chargeCard(
    cc: string,
    amount: number,
  ): Promise<
    {
      status: "success" | "failed" | "pending";
      chargeId: string;
      createdAt: string;
    }
  > {
    console.log(
      `trying to charge card ${cc} for amount ${amount} for app ${this.appId}`,
    );
    return new Promise((resolve) =>
      setTimeout(() => {
        if (amount > 100) {
          resolve({
            status: "success",
            chargeId: crypto.randomUUID(),
            createdAt: Date.now.toString(),
          });
        } else {
          resolve({
            status: "failed",
            chargeId: "",
            createdAt: Date.now.toString(),
          });
        }
      })
    );
  }
}
