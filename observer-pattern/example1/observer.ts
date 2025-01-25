import { IObserver } from "../types.ts";

// Concrete Observer
export class Observer<T> implements IObserver<T> {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(data: T): void {
    console.log(`data received to observer: ${this.name} | ${JSON.stringify(data)}`);
  }
}
