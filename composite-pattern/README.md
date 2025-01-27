# Composite Pattern

The Composite Pattern is a structural design pattern that lets you treat individual objects and groups of objects uniformly which means you can compose objects into tree structures and then work with these structures as if they were individual objects.

Think of it like a tree structure where both leaves (single objects) and branches (groups of objects) can be handled the same way. This is helpful when building systems with hierarchical data, like UI components or file systems.

## Key Concepts

1. **Component**: A common interface or abstract class for all objects in the hierarchy.
2. **Leaf**: A basic, indivisible object that implements the `Component` interface.
3. **Composite**: A container object (or branch) that also implements the `Component` interface and can hold other `Component` objects (both Leafs and other Composites).
4. **Tree Stucture**: Underlying entity represented via tree structure (parent - child heirarchy)
5. **Uniformity**: The ability to treat both Leafs and Composites the same way via the `Component` interface.

## Use Cases

1. **Frontend Frameworks**: Building UI trees with components (e.g., React's virtual DOM).
2. **Query Builders**: Representing complex database query structures.
3. **Filesystem Operations**: Representing files (Leaf) and directories (Composite).
4. **Image Editors**: Handling shapes (Leaf) and groups of shapes (Composite).

## Further Reading

https://refactoring.guru/design-patterns/composites
