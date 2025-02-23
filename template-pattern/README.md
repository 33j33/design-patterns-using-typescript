# Template Pattern

It is a behavioral design pattern that defines the skeleton of an algorithm in a base class and allows subclasses to override specific steps without modifying the overall structure.

Used when you want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure. It enforces consistency while providing flexibility for subclasses to modify behavior where needed. It provides a structured approach to write extendible business logic.

## Key Concepts

1. **Abstract Class**: Defines the template method and common functionality.
2. **Template Method**: A method in the base class that outlines the algorithm, calling abstract or hook methods that subclasses must implement.
3. **Concrete Subclasses**: Implement the specific steps of the algorithm.
4. **Encapsulation of Invariant Operations**: The base class ensures parts of the algorithm that must remain unchanged are protected. 

## Use Cases

1. Frontend frameworks (Component lifecycle): Template method is the rendering pipeline. Required/Invariant operations  - `render()`. Hooks/optional operations - `componentDidMount`, `componentDidUpdate`, `shouldComponentUpdate`
2. Test frameworks: Jest TestRunner uses this pattern. Template method is the test execution pipeline. Hooks - `beforeAll`, `afterAll`, `beforeEach`, `afterEach`. 
3. Build tools and compilers: Webpack, Gulp, Esbuild. Template method is the build pipeline. Hooks - Various compilation stages like compile, emit, done.

### Differences with other patterns

Template pattern uses inheritance to alter or extend parts of an algorithm via the sublasses while Strategy pattern is uses composition to alter parts of the algorithm. It does so by adding different strategies to the object encapsulating the algorithm.
Teplate pattern has lmited flexibility due restriction on what can change in subsclasses. Strategy is more flexible as entire behavior can be swapped. 