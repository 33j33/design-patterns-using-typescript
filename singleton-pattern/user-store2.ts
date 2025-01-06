import { Store2 } from "./store2.singleton.ts";

const initialState = {
  name: "",
  email: "",
  isAuthenticated: false,
  theme: "dark",
};

type State = typeof initialState;

let store2Instance: Store2<State>;

export const getUserStore2 = () => {
  if (!store2Instance) {
    store2Instance = new Store2(initialState);
  }
  return store2Instance;
};
