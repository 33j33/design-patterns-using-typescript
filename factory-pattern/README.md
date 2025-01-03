# Factory Pattern

Factory pattern is an OOPS way of refering to _creating objects with specific
functionality and encapsulating the creation process so as to not expose the
process to the client._

Factory can be anything that creates an object. In JS/TS world, it can be a
function or a class.

Factories make it easier to swap or extend the creation logic without changing
client code.

Adding new types of objects is simpler, as you can create new factories for
object creation.

## Key Concepts

1. **Product Interface/Abstract Class**: Defines the type of objects the factory
   will create.
2. **Concrete Products**: Specific implementations of the product interface.
3. **Factory Interface/Abstract Class**: Declares a method for creating objects.
4. **Concrete Factory**: Implements the creation logic to instantiate specific
   products.
