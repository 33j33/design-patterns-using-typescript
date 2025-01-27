# Bridge Pattern

The Bridge Pattern is a structural design pattern that separates an abstraction from its implementation, allowing the two to vary independently. It’s like building a bridge between two things so they can work together without being tightly coupled.

## Key Concepts

1. **Abstraction**: The high-level interface or abstract class. Defines what needs to be done and delegates the implementation to the Implementor.

2. **Concrete Abstraction**: A concrete version of the Abstraction. Extends or customizes the high-level behavior.

3. **Implementor (Bridge)**: the interface for low-level operations. Defines how the tasks are performed without knowing about the Abstraction.

4. **Concrete Implementor**: A specific implementation of the Implementor. Provides platform-specific or detailed behavior.

5. **Client**: Interacts with the Abstraction. Is decoupled from the details of the Implementor

## Use Cases

1. **JDBC**: Database operations (abstraction) separated from specific database drivers (implementation)
2. **React Native**: UI components (abstraction) with platform-specific renderers (implementation)
3. **Graphics libraries**: Drawing operations (abstraction) separated from device-specific rendering (implementation)

This pattern is particularly useful when you need to support multiple platforms or implementations while maintaining a consistent API.

## Further Reading

https://refactoring.guru/design-patterns/bridge

### Difference Between Bridge and Adapter

Bridge focuses on separating abstraction from implementation to allow both to evolve independently. It's used when you anticipate multiple variations of both abstractions and implementations. For example, React Native uses bridge pattern to maintain consistent component APIs while allowing platform-specific rendering implementations.

Adapter focuses on making existing incompatible interfaces work together. It's used when integrating legacy systems or third-party components. For example, database ORMs often use adapters to make different database APIs conform to a single interface, or how polyfills adapt modern JavaScript APIs to work in older browsers.
