# Abstract Factory Pattern

Builds on the factory pattern.

It is creational design pattern that provides an interface for creating families
of related or dependent objects without specifying their concrete classes.

## Key Concepts

1. **Abstract Factory Interface**: Declares methods for creating a set of
   related or dependent objects.
2. **Concrete Factories**: Implement the Abstract Factory interface to produce
   family-specific objects.
3. **Abstract Products**: Declare interfaces for different product types.
4. **Concrete Products**: Implement the Abstract Product interfaces.
5. **Client Code**: Uses the Abstract Factory and Abstract Products. It does not
   know the specifics of the Concrete Factories or Products, enabling easy
   extension and scalability.

#### How is it different than Factory Pattern?

Factory pattern creates objects of one product type while Abstract Factory
Pattern creates families of related objects of different product types.

> Family: A family refers to a group of related products (e.g., PostgreSQL's
> connection and CRUD operations or MongoDB's connection and CRUD operations).

> Product: A product is an individual entity in the family (e.g.,
> DatabaseConnection or CRUDOperations).

## Use Case Example: Data Access Layer

Suppose you are building a data access layer for an application. This layer must
support multiple databases like PostgreSQL and MySQL. The layer needs to handle
db connection and CRUD operators.


## Further Reading

https://refactoring.guru/design-patterns/abstract-factory