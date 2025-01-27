// Concrete Subject (observable)

import { IObserver, ISubject } from "../types.ts";
import { ProductPrice } from "./types.ts";

export class PriceMonitor implements ISubject<ProductPrice> {
  private observers: Set<IObserver<ProductPrice>>;

  constructor() {
    this.observers = new Set();
  }

  attach(observer: IObserver<ProductPrice>): void {
    if (!this.observers.has(observer)) this.observers.add(observer);
  }

  detach(observer: IObserver<ProductPrice>): void {
    this.observers.delete(observer);
  }

  notify(data: ProductPrice): void {
    this.observers.forEach(o => o.update(data));
  }
}
