# Decorator Pattern

The Decorator Pattern is a structural design pattern that allows you to dynamically add new behavior to an object without modifying its existing code. 

Key Concepts
1. **Composition over Inheritance**: Instead of extending a class, decorators wrap an object and modify its behavior.
2. **Flexible and Scalable**: You can stack multiple decorators to add multiple functionalities dynamically.


## Use Cases

Express.js middleware functions - they wrap around route handlers to add authentication, logging, or error handling.

In Angular, the `@Component`, `@Injectable`, and `@Input` decorators modify class behavior by adding metadata and functionality to classes and properties.

In NestJS uses decorators to define controllers, services, middleware, and validation. `@Controller()` - Defines a class as a controller handling HTTP routes.` @Get()`, `@Post()` - Maps methods to specific HTTP routes.

## Further Reading

https://blog.logrocket.com/practical-guide-typescript-decorators/

https://refactoring.guru/design-patterns/decorator

https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators

## Differences with other patterns

1. Need to make incompatible things work together? Use Adapter

2. Need to separate concerns that vary independently? Use Bridge

3. Need to treat individual objects and compositions uniformly? Use Composite

4. Need to add behaviors dynamically? Use Decorator
