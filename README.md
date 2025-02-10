# design-patterns-using-typescript

This repo tries to explain common design patterns using examples coded in Typescript.  
Instead of abstract examples, you'll find implementations that mirror real-world tools you already use.
E.g, to see how Redux does state management? Check out the [Singleton pattern example](singleton-pattern/store.singleton.ts) that emulates a Redux store. Curious how Express.js implements its middleware using the Chain of Responsibility Pattern? Check out this [CoR example](chain-of-responsibility-pattern/server.ts)

## Getting Started

Run the `pattern` deno task to execute any of the patterns from the files.

`deno task pattern abstract-factory-pattern`

_if you don't you have `deno` installed, refer to this [installation guide](https://docs.deno.com/runtime/getting_started/installation/)_

## Patterns

### 1. Creational: How objects are created

| Pattern Name | Description |
|-------------|-------------|
| **[Factory Pattern](factory-pattern/README.md)** | Centralizes object creation, hiding the complexity of instantiation logic. For example `createElement()` in React creates different types of DOM elements based on the tag name you provide. This pattern is useful when object creation involves complex logic that should be isolated from the rest of the application. |
| **[Abstract Factory Pattern](abstract-factory-pattern/README.md)** | Provides an interface for creating families of related objects without specifying their concrete classes. For example, this pattern would be useful to build a data access layer for an application. This layer must support multiple databases like PostgreSQL and MySQL. |
| **[Builder Pattern](builder-pattern/README.md)** | Enables the construction of complex objects through a step-by-step approach, where each step can be customized independently. Query builders in ORMs use this pattern to chain methods like `.select()`, `.where()`, and `.orderBy()` to construct complex database queries (knex, drizzle). |
| **[Singleton Pattern](singleton-pattern/README.md)** | Ensures a class has only one instance throughout the application's lifecycle while providing global access to that instance. Frontend stores (redux), database connections, and logging services often use this pattern to maintain a single source of truth. |

### 2. Structural: How objects are laid out in relation to each other

| Pattern Name | Description |
|-------------|-------------|
| **[Adapter Pattern](adapter-pattern/README.md)** | Allows incompatible interfaces to work together by wrapping an object in an adapter that makes it compatible with another interface. Similar to how libraries like Axios provide a consistent API across different environments (browser's fetch API, Node's http module) by adapting their specific implementations to a common interface. |
| **[Bridge Pattern](bridge-pattern/README.md)** | Separates an abstraction from its implementation, allowing them to vary independently. Consider how a cross-platform UI framework (react-native) might separate the abstract definition of a component (Button, Input) from its platform-specific implementation (Web, Mobile, Desktop). This allows both the component API and the platform implementations to evolve separately. |
| **[Composite Pattern](composite-pattern/README.md)** | Creates tree-like structures where individual objects and compositions of objects can be treated uniformly. Think of it like a tree structure where both leaves (single objects) and branches (groups of objects) can be handled the same way. This is helpful when building systems with hierarchical data, like UI components or file systems. |
| **[Decorator Pattern](decorator-pattern/README.md)** | Allows behavior to be added to individual objects dynamically without affecting other objects of the same class. Examples include Express.js middleware (you can wrap your route handlers with additional behaviors like authentication, logging, or error handling) and TypeScript decorators (@injectable, @observable) for enhancing classes with additional functionality. |
| **[Facade Pattern](facade-pattern/README.md)** | Provides a simplified interface to a complex subsystem. Consider how the fetch API provides a clean interface that hides the complexity of making HTTP requests, or how ORMs like Sequelize provide a straightforward interface for database operations while hiding the complexity of SQL queries and connection management. This pattern is essential when you want to provide a simple API for a complex system. |
| **[Flyweight Pattern](flyweight-pattern/README.md)** | Helps reduce memory usage by sharing common data among multiple objects. Instead of creating separate instances for every object, it reuses existing ones when possible. Game engines use this pattern to optimize memory usage by sharing graphical assets, textures, and object instances. |


### 3. Behavioral: How objects communicate with each other


| Pattern Name | Description |
|-------------|-------------|
| **[Strategy Pattern](strategy-pattern/README.md)** | Defines a family of algorithms and makes them interchangeable. Payment processing systems often use this pattern to switch between different payment methods (credit card, PayPal, crypto), each with its own processing algorithm but sharing a common interface. |
| **[Observer Pattern](observer-pattern/README.md)** | Establishes a one-to-many relationship between objects, where multiple observers are notified automatically of any state changes in the subject they're observing. React's useState and Redux's subscribe mechanism implement this pattern, allowing components to automatically update when state changes. Event handling systems in Node.js also use this pattern with EventEmitter. |
| **[Mediator Pattern](mediator-pattern/README.md)** | Reduces direct connections between components by making them communicate through a central mediator. Chat applications use this pattern to handle message routing between users without them needing to know about each other directly. State management via a store in most frontend applications uses this pattern. |
| **[Chain of Responsibility Pattern](chain-of-responsibility-pattern/README.md)** | Passes requests along a chain of handlers until one handles the request. Examples include Express.js middleware chain where each middleware function can either handle the request, modify it and pass it on, or trigger an error. |
| **[Command Pattern](command-pattern/README.md)** | Encapsulates a request as an object, allowing you to parameterize clients with different requests, queue requests, and support undoable operations. Text editors use this pattern to implement undo/redo functionality by encapsulating each edit as a command object. Task queuing systems also use this pattern to package tasks with their parameters for delayed execution. |
| **[Iterator Pattern](iterator-pattern/README.md)** | Provides a way to access elements of a collection sequentially without exposing its underlying representation. JavaScript's built-in iterators (used with for...of loops) demonstrate this pattern. GraphQL clients use this pattern for pagination, allowing you to traverse large datasets piece by piece without loading everything at once. |


### References

1. https://refactoring.guru/design-patterns
2. https://www.freecodecamp.org/news/javascript-design-patterns-explained
3. https://www.patterns.dev
4. [10 Design Patterns Explained - fireship.io](https://www.youtube.com/watch?v=tv-_1er1mWI)
5. _and some LLM help to tidy up things_
