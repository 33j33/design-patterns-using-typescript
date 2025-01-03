import { BeverageFactory } from "./beverage.factory.ts";

const factory = new BeverageFactory();

const coffee = factory.createBeverage("coffee", 10, "latte");
console.log(coffee.serve());

const tea = factory.createBeverage("tea", 2);

console.log(tea.serve());

const juice = factory.createBeverage("juice", 20, "orange");

console.log(juice.serve());
