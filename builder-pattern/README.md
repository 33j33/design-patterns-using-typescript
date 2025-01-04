# Builder Pattern

It is a creational design pattern that is used to construct complex objects
step-by-step. It helps in creating different representations of an object with
numerous configuration options.

## Use Cases

you’re building an application where users have highly configurable profiles. A
user profile may include optional attributes like contact information, roles,
permissions, preferences, etc. It makes for better design to use builder pattern
to create a user with specific profile instead of having muliple contructors in
a class or optional params to create one.

Another example would be a SQL query builder where one needs to use multiple
clauses (WHERE, SELECT, GROUP BY, etc). This pattern provides a structured way
to construct these queries in a type-safe, extendable, and reusable manner. One
such example is this Query Builder from Knex
https://github.com/knex/knex/blob/master/lib/query/querybuilder.js#L329

## Further Reading

https://refactoring.guru/design-patterns/builder
