// Observer Interface
export interface IObserver<T> {
  update(data: T): void;
}

// Subject Interface
export interface ISubject<T> {
  attach(observer: IObserver<T>): void;
  detach(observer: IObserver<T>): void;
  notify(data: T): void;
}
