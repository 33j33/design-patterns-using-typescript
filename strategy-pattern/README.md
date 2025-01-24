# Strategy Pattern

It is a behavioral design pattern that allows us to define a family of algorithms, encapsulate each one in a separate class and select the appropriate one based on the situation.  This pattern is useful when multiple algorithms can be used for a specific task, and the choice of which one to use can be made dynamically at runtime.

Instead of hardcoding an algorithm inside a class, we delegate the actual implementation to different strategy classes.
It is often used to isolate the business logic of a class from the implementation details of algorithms that may not be as important in the context of that logic.

## Key Concepts

1. **Strategy Interface**: Defines a contract that all concrete strategies must follow.
2. **Concrete Strategies**: Different implementations of the strategy interface.
3. **Context**: A class that uses a strategy object to execute a behavior without knowing which specific algorithm is being used.

## Use Cases

1. Payment Processing: Selecting different payment gateways (PayPal, Stripe, etc.).
2. Authentication Mechanisms: Choosing between OAuth, JWT, or basic authentication (Passportjs).
3. Logging Mechanism: Dynamically choosing file-based logging, console logging, or cloud-based logging (Winston).


## Further Reading 

https://refactoring.guru/design-patterns/strategy