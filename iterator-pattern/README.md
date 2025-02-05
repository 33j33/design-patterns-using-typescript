# Iterator Pattern

The Iterator pattern is a behavioral design pattern that provides a standardized way to traverse through a collection of elements without exposing its underlying structure.

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

