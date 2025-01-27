import { IObserver } from "../types.ts";
import { ProductPrice } from "./types.ts";

// Concrete Observers

// updates ui whenever on price change
export class UIUpdater implements IObserver<ProductPrice> {
  update(data: ProductPrice): void {
    console.log(`UI update: Price updated to ${data.price}${data.currency} for ${data.productId}`);
  }
}

// updates the inventory on price change
export class Investory implements IObserver<ProductPrice> {
  update(data: ProductPrice): void {
    console.log(`Inventory System: Updating price records for product ${data.productId}`);
  }
}

// notifies users of price change
export class Notifier implements IObserver<ProductPrice> {
  private readonly PRICE_CHANGE_THRESHOLD = 0.1; // 10%
  private productMap: Map<string, number>;
  constructor() {
    this.productMap = new Map();
  }
  update(data: ProductPrice): void {
    const previousPrice = this.productMap.get(data.productId);
    if (previousPrice) {
      const diff = Math.abs(data.price - previousPrice) / previousPrice;
      if (diff >= this.PRICE_CHANGE_THRESHOLD) {
        console.log(`Users notified of price change for ${data.productId} | Discount - ${Math.floor(diff * 100)}%`);
      }
    }
    this.productMap.set(data.productId, data.price);
  }
}
