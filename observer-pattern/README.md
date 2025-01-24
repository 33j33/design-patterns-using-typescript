# Observer Pattern

The Observer Pattern is a behavioral design pattern used to establish a one-to-many dependency between objects. When one object (called the subject) changes, all its dependent objects (observers) are automatically notified and updated.
The subject and observer are loosely connected, making it easy to extend without modifying existing code.

It differs with a pure pub/sub system, publishers and subscribers often don't know about each other directly, while in the traditional observer pattern, the subject maintains direct references to its observers.

## Key Concepts

1. **Subject (Observable)**: This is the core component that holds the state and sends notifications. It maintains a list of observers and notifies them of state changes.

2. **Observer Interface**: This defines the contract that all observers must follow. It specifies how observers will receive updates.

3. **Concrete Observers**: These are the actual implementations that receive and react to updates from the subject.

## Use Cases

Observer pattern is very widely used in modern software. You see it in most places. Redux's store subscriptions, RxJS's Observable streams, Node.js EventEmitter, WebSocket connections, DOM event listeners

## Similar Patterns

```js
// Observer Pattern
subject.attach(observer);

// Pub/Sub Pattern
messageBroker.subscribe("topic", callback);

// Event-Emitter Pattern
eventEmitter.on("eventName", handler);

// Listener Pattern
element.addEventListener("click", listener);
```