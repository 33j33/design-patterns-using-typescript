// -- Singleton Pattern 2 (modular and functional design) -- //
// This approach is more composible and allows tree-shaking unlike OOP based approach

type Listener<T> = (state: T, prevState: T) => void;

// Factory Interface
export type Store<T> = {
  getState(): T;
  setState(state: Partial<T>): void;
  subscribe(listener: Listener<T>): () => void;
};

// Factory to create store
export function createStore<T>(initialState: T): Store<T> {
  let state = { ...initialState };
  const listeners: Listener<T>[] = [];

  const getState = () => ({ ...state });

  const setState = (newState: Partial<T>) => {
    const prevState = state;
    state = { ...state, ...newState };
    listeners.forEach((listener) => listener(state, prevState));
  };

  const subscribe = (listener: Listener<T>) => {
    listeners.push(listener);
    return () => {
      const idx = listeners.indexOf(listener);
      if (idx > -1) listeners.splice(idx, 1);
    };
  };
  return { getState, setState, subscribe };
}
