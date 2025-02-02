# Flyweight Pattern

It is a structural design pattern that helps reduce memory usage by sharing common data among multiple objects. Instead of creating separate instances for every object, it reuses existing ones when possible.

For example, if an application has thousands of objects with some shared properties, we can store those properties in a separate, shared object. This avoids redundant memory consumption and improves performance. Also used when one doesn't want create new resource and share existing resource from a pool

## Key Concepts

1. **Intrinsic State**: Shared data that remains the same across multiple instances.
2. **Extrinsic State**: Unique data specific to each instance, not shared.
3. **Concrete Flyweight**: Implements the Flyweight interface with intrinsic state
4. **Flyweight Factory**: Manages and reuses shared objects instead of creating new ones.

## Use Cases

1. Game engines use the flyweight pattern to optimize memory usage by sharing graphical assets, textures, and object instances.
2. Widgets and UI components are shared instead of creating new instances in GUI frameworks
3. React uses the flyweight pattern in its Virtual DOM and component rendering. The reconciliation process ensures that React reuses existing DOM elements instead of creating new ones.
4. Three.js implements instancing and shared geometry buffers to optimize rendering large numbers of 3D objects.
5. Database connection pooling, caching query results

## Further Reading

https://refactoring.guru/design-patterns/flyweight

https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s18.html
