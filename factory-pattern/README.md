# Factory Pattern

Factory pattern is an OOPS way of refering to _creating objects with specific
functionality and encapsulating the creation process so as to not expose the
process to the client._

Factory can be anything that creates an object. In JS/TS world, it can be a
function or a class.

Factories make it easier to swap or extend the creation logic without changing
client code.

Adding new types of similar objects is simpler, as you can modify existing
factory for object creation.

## Key Concepts

1. **Product Interface/Abstract Class**: Defines the type of objects the factory
   will create.
2. **Concrete Products**: Specific implementations of the product interface.
3. **Factory Interface/Abstract Class**: Declares a method for creating objects.
4. **Concrete Factory**: Implements the creation logic to instantiate specific
   products.

## Differences with other patterns

**Adapter pattern** wraps over one object. **Facade Pattern** creates a single object to represent a subsystem of multiple objects. **Flyweight Pattern** creates lots of little objects. 

**Facade** defines a simplified interface to a subsystem of objects. The subsystem itself is unaware of the facade. **Mediator** facilate communication between components of the system. The components only know about the mediator object and don’t communicate directly.

## Further Reading

https://refactoring.guru/design-patterns/factory-method
