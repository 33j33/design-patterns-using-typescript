# Mediator Pattern

It is a behavioral design pattern that helps reduce direct dependencies between components by introducing a mediator. Instead of components communicating directly with each other, they communicate through the mediator, making the system loosely coupled and easier to manage as adding new components doesn't affect existing ones.

Think of it like an air traffic controller - instead of planes communicating directly with each other, they all communicate through the control tower.

## Key Concepts

1. **Mediator**: The central object that handles communication between components.
2. **Colleagues (Components)**: Objects that need to communicate but do so through the mediator instead of directly.

## Use Cases

1. Handling communication between UI components without tight coupling. Example: Redux store for state management - acts as a mediator between application state and components. 
2. Managing communication between services in microservices architecture. Example: Message Brokers (RabbitMQ, Kafka).
3. Managing message routing between users in Chat rooms/channels

## Difference with other patterns 

**Chain of Responsibility** passes a request sequentially along a dynamic chain of potential receivers until one of them handles it.

**Command** establishes unidirectional connections between senders and receivers.

**Mediator** eliminates direct connections between senders and receivers, forcing them to communicate indirectly via a mediator object.

**Observer** lets receivers dynamically subscribe to and unsubscribe from receiving requests.


## Further Reading

https://www.patterns.dev/vanilla/mediator-pattern

https://refactoring.guru/design-patterns/mediator