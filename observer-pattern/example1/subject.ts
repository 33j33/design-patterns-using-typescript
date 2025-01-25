import { IObserver, ISubject } from "../types.ts";

export class Subject<T> implements ISubject<T> {
  private observers: Set<IObserver<T>>;
  name: string;
  constructor(name: string) {
    this.observers = new Set();
    this.name = name;
  }
  attach(observer: IObserver<T>): void {
    if (!this.observers.has(observer)) this.observers.add(observer);
  }
  detach(observer: IObserver<T>): void {
    this.observers.delete(observer);
  }
  notify(data: T): void {
    this.observers.forEach((o) => o.update(data));
  }
}
