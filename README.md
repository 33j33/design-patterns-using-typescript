# design-patterns-using-typescript

This repo breaks down common design patterns using TypeScript. Instead of abstract examples, you'll find implementations that mirror real-world tools you already use. 

E.g, to see how Redux enforces a single source of truth? Check out the [Singleton pattern example](singleton-pattern/store.singleton.ts) emulating state management via a basic Redux store. Curious how Express.js implements its middleware using the Chain of Responsibility Pattern? Check out this [CoR example](chain-of-responsibility-pattern/server.ts)


## Getting Started

Run the `pattern` deno task to execute any of the patterns from the files.

`deno task pattern abstract-factory-pattern`

## Patterns

1. **Creational**

   1. [**Factory Pattern**](factory-pattern/README.md):
   2. [**Abstract Factory Pattern**](abstract-factory-pattern/README.md):
   3. [**Builder Pattern**](builder-pattern/README.md):
   4. [**Singleton Pattern**](singleton-pattern/README.md):

2. **Structural**

   1. [**Adapter Pattern**](adapter-pattern/README.md):
   2. [**Bridge Pattern**](bridge-pattern/README.md):
   3. [**Composite Pattern**](composite-pattern/README.md):
   4. [**Decorator Pattern**](decorator-pattern/README.md):
   5. [**Facade Pattern**](facade-pattern/README.md):

3. **Behavioral**
   1. [**Strategy Pattern**](strategy-pattern/README.md):
   2. [**Observer Pattern**](observer-pattern/README.md):
   3. [**Mediator Pattern**](mediator-pattern/README.md):
   4. [**Chain of Responsibility Pattern**](chain-of-responsibility-pattern/README.md):
