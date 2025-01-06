type Listener<T> = (state: T, prevState: T) => void;

export class Store2<T> {
  private state: T;

  private listeners: Array<Listener<T>>;

  constructor(initialState: T) {
    this.state = initialState;
    this.listeners = [];
  }
  setState(newState: Partial<T>) {
    const prevState = this.state;
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener(this.state, prevState));
  }
  getState() {
    return { ...this.state };
  }
  subscribe(listener: Listener<T>) {
    this.listeners.push(listener);
    return () => {
      const idx = this.listeners.indexOf(listener);
      if (idx > -1) this.listeners.splice(idx, 1);
    };
  }
}
