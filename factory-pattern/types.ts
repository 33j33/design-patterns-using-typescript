// -- Product Interface -- //
export interface Beverage {
  name: string;
  quantity: number;
  type?: string;
  serve(): string;
}

export type Beverages = "coffee" | "tea" | "juice";

// -- Abstract Factory Interface -- //
export interface IBeverageFactory {
  createBeverage(beverage: Beverages, quantity: number, type?: string): Beverage;
}
