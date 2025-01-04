import { createStore } from "./store.singleton.ts";

const initialState = {
  name: "",
  email: "",
  isAuthenticated: false,
  theme: "dark",
};

type State = typeof initialState;

// Singleton Store Instance
let storeInstance: ReturnType<typeof createStore<State>>;
export const getUserStore = () => {
  if (!storeInstance) {
    storeInstance = createStore({
      name: "",
      email: "",
      isAuthenticated: false,
      theme: "dark",
    });
  }
  return storeInstance;
};
