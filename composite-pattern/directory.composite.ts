import { IFileSystemNode } from "./types.ts";

// Composite Class
export class Directory implements IFileSystemNode {
  private children: IFileSystemNode[];
  name: string;
  constructor(name: string) {
    this.name = name;
    this.children = [];
  }
  getSize(): number {
    return this.children.reduce((sum, node) => sum + node.getSize(), 0);
  }
  print(indent: string): void {
    console.log(`${indent}📁 ${this.name}/  (${this.getSize()} KB)`);
    this.children.forEach((node) => {
      node.print(indent + " ");
    });
  }
  add(node: IFileSystemNode) {
    this.children.sort((nodeA, nodeB) => nodeA.name.localeCompare(nodeB.name));
    this.children.push(node);
  }
  remove(node: IFileSystemNode) {
    const idx = this.children.indexOf(node);
    if (idx > -1) this.children.splice(idx, 1);
  }
}
