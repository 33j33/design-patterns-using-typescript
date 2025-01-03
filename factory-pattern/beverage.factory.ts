import { Beverage, Beverages, IBeverageFactory } from "./types.ts";

// -- Product Classes -- //

class Coffee implements Beverage {
  name: Beverages = "coffee";
  quantity: number;
  type: string;

  constructor(quantity: number, type: string) {
    this.quantity = quantity;
    this.type = type;
  }
  serve(): string {
    return `${this.name}: ${this.quantity} | ${this.type}`;
  }
}

class Tea implements Beverage {
  name: Beverages = "tea";
  quantity: number;

  constructor(quantity: number) {
    this.quantity = quantity;
  }
  serve(): string {
    return `${this.name}: ${this.quantity}`;
  }
}

class Juice implements Beverage {
  name: Beverages = "juice";
  quantity: number;
  type: string;

  constructor(quantity: number, type: string) {
    this.quantity = quantity;
    this.type = type;
  }
  serve(): string {
    return `${this.name}: ${this.quantity} | ${this.type}`;
  }
}

// -- Beverage Factory Class -- //

export class BeverageFactory implements IBeverageFactory {
  createBeverage(
    beverage: Beverages,
    quantity: number,
    type?: string,
  ): Beverage {
    switch (beverage) {
      case "coffee":
        if (!type) throw new Error("define a type");
        return new Coffee(quantity, type);
      case "tea":
        return new Tea(quantity);
      case "juice":
        if (!type) throw new Error("define a type");
        return new Juice(quantity, type);
      default:
        throw new Error("Invalid Beverage");
    }
  }
}
