# Command Pattern

It is a behavioral design pattern that turns a request into an object. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations. It decouples the sender (who wants something done) from the receiver (who actually performs the action).

Used when you want to queue operations, schedule their execution, or execute them remotely. A command can be serialized, which means converting it to a string that can be easily written to a file or a database. You can delay and schedule command execution. you can put them in queue, log or send them over the network.

Used when you want to implement undoable actions, e.g text editor. you turn your operations into a command and then push them in a stack which you can pop out to replay previous commands. 


## Key Concepts

1. **Command Interface** – Defines the contract for executing an operation.
2. **Concrete Commands** – Implement the command interface and define actions.
3. **Invoker** – Stores and invokes commands when needed.
4. **Receiver** – The actual entity that performs the task.

## Use Cases

1. Handling undo/redo actions in Text Editor.
2. Managing player actions in Game Engine.
3. Task Scheduling via queues.

## Further Reading

https://refactoring.guru/design-patterns/command

