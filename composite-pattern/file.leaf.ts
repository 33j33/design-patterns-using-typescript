import { IFileSystemNode } from "./types.ts";

// Leaf Class
export class File implements IFileSystemNode {
  name: string;
  private size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
  getSize(): number {
    return this.size;
  }
  print(indent: string): void {
    console.log(`${indent}📄 ${this.name} (${this.size} KB)`);
  }
}
