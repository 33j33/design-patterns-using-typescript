import { Database } from "./database.singleton.ts";
import { getUserStore } from "./user-store.ts";
import { getUserStore2 } from "./user-store2.ts";

// Singleton Example 1 : Database Access
const db1 = Database.connect("localhost:5432/mysql"); // connected to localhost:5432/mysql
db1.query("SELECT * FROM users"); // Executing query: SELECT * FROM users

const db2 = Database.instance; // instance of singleton class that can be used through out the application
db1.query("SELECT id, name, email FROM USERS"); // Executing query: SELECT id, name, email FROM USERS

console.log(db1 === db2); // true

// Singleton Example 2.1 : Frontend Store
const userStore = getUserStore();

const unsubscribe = userStore.subscribe((state, prevState) => {
  console.log(`Prev State: ${prevState.name} | ${prevState.email} | ${prevState.isAuthenticated}`); // Prev State:  |  | false
  console.log(`New State: ${state.name} | ${state.email} | ${state.isAuthenticated}`); // New State: Jai | jai@gmail.com | true
});

userStore.setState({
  name: "Jai",
  email: "jai@gmail.com",
  isAuthenticated: true,
});

console.log(userStore.getState()); // { name: "Jai", email: "jai@gmail.com", isAuthenticated: true, theme: "dark" }

unsubscribe();

userStore.setState({ theme: "light" }); // doesn't log anything

// Singleton Example 2.2 : Frontend Store2
const userStore2 = getUserStore2();

userStore2.subscribe((state, prevState) => {
  console.log(`Prev State: ${prevState.name} | ${prevState.email} | ${prevState.isAuthenticated}`); // Prev State:  |  | false
  console.log(`New State: ${state.name} | ${state.email} | ${state.isAuthenticated}`); // New State: Saorse Ronan | ronan@gmail.com | true
});

userStore2.setState({
  name: "Saorse Ronan",
  email: "ronan@gmail.com",
  isAuthenticated: true,
});
