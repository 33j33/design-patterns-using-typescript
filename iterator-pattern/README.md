# Iterator Pattern

The Iterator pattern is a behavioral design pattern that provides a standardized way to traverse through a collection of elements without exposing its underlying structure.

Clients can iterate using next()/hasNext() without knowing if data comes from an array, database, or tree (abstraction) and same iterator interface works across different collections (reusability). 
Having this pattern implemented new traversal logic (e.g., depth-first vs. breadth-first) can be added without changing the collection. 

## Key Concepts

**Iterator interface** defines methods for traversing: typically `hasNext()` to check if more elements exist and `next()` to retrieve the next element.
**Collection interface** declares methods for getting an iterator instance.
**Concrete Iterator** implements the traversal behavior for a specific collection type.
**Concrete Collection** creates and returns appropriate iterator instances.

## Use Cases

1. React’s `.map()` for rendering lists.
2. DOM traversal APIs like `NodeIterator` let you walk through document elements.
3. Database cursors in MongoDB and PostgreSQL implement iterators to stream large result sets.
4. Node.js's `ReadableStream` use iterator patterns for processing data chunks.

## Further Reading 

https://refactoring.guru/design-patterns/iterator

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators

