// Component Interface
export interface IFileSystemNode {
  name: string;
  getSize(): number;
  print(indent: string): void;
}
// both Leaf and Composite class will implement IFileSystemNode interface
