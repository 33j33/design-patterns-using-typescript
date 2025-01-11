# Singleton Pattern

The Singleton pattern is a design pattern that ensures a class has only one
instance throughout the application and provides a global access point to that
instance. It helps provide a stricter control over global variables. It is
useful when one needs to manage shared resources like database connections,
external libs/sdks, application state or configuration settings.

## Use Cases

1. **Database Connections**: In database libraries, a Singleton can manage a shared
   connection to a database, ensuring that multiple parts of an app don't create
   unnecessary connections.

2. **Logging**: A logging utility is a classic use of Singleton. It ensures a
   consistent way to log messages throughout the application.

3. **State Management on Frontend**: Stores for managing global application state
   are often Singleton. For example, Redux Store in React Apps.

4. **SDK Clients**: Cloud service SDKs (e.g., AWS SDKs) often use Singleton to
   manage credentials and service clients.

## Further Reading

https://refactoring.guru/design-patterns/singleton