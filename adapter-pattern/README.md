# Adapter Pattern

The Adapter Pattern is a structural design pattern used to make two incompatible
interfaces or objects work together. An adapter wraps one of the objects to hide
the complexity of conversion happening behind the scenes. The wrapped object
isn’t even aware of the adapter.

Think of an adapter as a plug converter that allows a device with a US plug to
work with a European socket. Popular Usage in Software

## Use Cases

1. **Libraries or SDKs**: When you use a library that doesn't match your
   application's data structure or format, an adapter can transform your data to
   fit the library's expectations.
2. **Databases**: An adapter can convert raw database query results into a format
   your application can use easily.
3. **Frontend**: An adapter can normalize API responses to fit the model
   used in your UI components.

## Further Reading

https://refactoring.guru/design-patterns/adapter