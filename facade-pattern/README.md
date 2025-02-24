# Facade Pattern

The Facade Pattern is a structural design pattern that provides a simplified, higher-level interface to a complex system of classes, libraries, or subsystems. It helps to hide the complexities behind a unified interface and easy to use API. This helps reduce coupling between client code and the underlying system.

## Key Concepts

1. **Encapsulation**: Hides the complexities of multiple subsystems.
2. **Simplification**: Provides a single API to interact with complex components.

## Use Cases

This might be most widely used pattern out there.

1. Database ORMs (like TypeORM) that hide SQL complexity
2. Frontend frameworks (like React Router) that simplify navigation
3. Cloud SDKs (like AWS SDK) that abstract AWS services
4. HTTP clients (like Axios) that simplify REST API calls

## Differences with other patterns

**Adapter pattern** wraps over one object. **Facade Pattern** creates a single object to represent a subsystem of multiple objects. **Flyweight Pattern** creates lots of little objects.

**Facade** defines a simplified interface to a subsystem of objects. The subsystem itself is unaware of the facade. **Mediator** facilitate communication between components of the system. The components only know about the mediator object and don’t communicate directly.


## Further Reading

https://refactoring.guru/design-patterns/facade
