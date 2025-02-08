import { MenuIterator } from "./menuIterator.ts";
import { MenuItem } from "./types.ts";

// Concrete Collection implementation for menu structure
export class Menu {
  constructor(private root: MenuItem) {}

  getIterator(maxDepth: number): MenuIterator {
    return new MenuIterator(this.root, maxDepth);
  }
}
