import { MenuItem, MenuItemWithDepth } from "./types.ts";

export class MenuIterator implements Iterator<MenuItemWithDepth> {
  private stack: { node: MenuItem; depth: number }[] = [];
  private currentDepth: number = 0;
  private readonly maxDepth: number;
  constructor(root: MenuItem, maxDepth: number) {
    this.stack.push({ node: root, depth: 1 });
    this.maxDepth = maxDepth;
  }

  next(): IteratorResult<MenuItemWithDepth> {
    if (this.stack.length <= 0) return { done: true, value: undefined };

    // stack is used instead of queue as `pop()` is O(1) while `shift()` is O(n)
    const entry = this.stack.pop()!;
    this.currentDepth = entry.depth;
    const currentNode = entry.node;

    if (currentNode.children && this.currentDepth < this.maxDepth) {
      const nextDepth = this.currentDepth + 1;

      // reversing so that insertion order is correct
      const children = [...currentNode.children].reverse();

      children.forEach(child => this.stack.push({ node: child, depth: nextDepth }));
    }

    return {
      value: { ...currentNode, depth: this.currentDepth },
      done: false,
    };
  }
  [Symbol.iterator](): Iterator<MenuItemWithDepth> {
    return this;
  }
}
