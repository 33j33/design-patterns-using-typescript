# Chain of Responsibility Pattern

The Chain of Responsibility (CoR) pattern is a behavioral design pattern that allows multiple objects to process a request without explicitly defining which object will handle it. The request is passed along a chain of handlers, and each handler can either process the request or pass it to the next handler. This pattern decouples senders from receivers, making the system more flexible and scalable as you can easily add or remove handlers without changing the client code.

## Key Concepts

1. **Handler Interface**: Defines a method for handling requests and setting the next handler.
2. **Concrete Handlers**: Implement specific logic to decide whether to process or forward a request.
4. **Chaining Mechanism**: Client builds the chain and initiates the request. Handlers are linked in a specific order to form a processing pipeline.

## Use Cases


1. HTTP Middleware (Express.js, NestJS): Authentication, authorization, validation, and logging.

2. UI Event Handling: Event propagation in DOM (bubbling/capturing).

3. Payment processing (e.g., validating card details, checking fraud, processing transactions).

## Further Reading

https://refactoring.guru/design-patterns/chain-of-responsibility