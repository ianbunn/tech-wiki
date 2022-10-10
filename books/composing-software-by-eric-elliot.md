# Composing Software

By Eric Elliot

Ref: [Medium/javascript-scene/composing-software](https://medium.com/javascript-scene/composing-software-the-book-f31c77fc3ddc)

## Object Composition

"Favor object composition over class inheritance" -Gang of Four, "Design Patterns"

Software dev has a tendency to overuse class inheritance.

Class inheritance is the tightest form of coupling available in object-oriented design, 
which leads to many common problems, including:

* Fragile base class problem
* Gorilla/banana problem
* Duplication by necessity problem

Class inheritance accomplishes reuse by abstracting a common interface into a base class that 
subclasses can inherit from, add to, and override.

There are 2 important parts of abstraction:

* Generalization: extracting only the shared properties and behaviors that serve the general use case
* Specialization: providing the implementation details required to serve the special case

There are some other good alternatives to class inheritance, which include:

* Simple functions
* Higher order functions
* Object composition

### What is object composition?

"In computer science, a composite data type or compound data type is any data type which 
can be constructed in a program using the programming language's primitive data types and 
other composite types...The act of constructing a composite type is known as composition" - Wikipedia

There are many diff ways to compose objects. Diff forms of composition will produce 
diff composite structures and diff relationships between the objects.

When objects depend on the objects they're related to, those objects are coupled, 
meaning changing one could break the other.

Advice from the Gang of Four (Design Patterns) is to think of our objects as a composition of smaller, 
loosely coupled objects rather than wholesale inheritance from a monolithic base class.

Monolithic systems, where you can't change or remove a class w/out understanding and changing many 
other classes, becomes a dense mass that's hard to learn, port and maintain.

### 3 diff forms of object composition

* Aggregation (not true in a language w/dynamic object extension)
  * In JS, aggregations does not imply control over subject lifecycle
  * An object which contains other objects
    * Each subject retains its own ref ID, so it could be decoupled from the aggregation 
      w/out info loss, e.g., arrays, trees, etc.
* Delegation
  * When an object forwards to another object
    * JS's prototypes are delegates: array instances fwd built-in array method calls to 
      `Array.prototype`, objects to `Object.prototype`, etc.
* Concatenation (dynamic object extension)
  * Properties can be concatenated one at a time or copied from existing objects, e.g., 
    jQuery plugins are created by concatenating new methods to the jQuery delegate prototype, `jQuery.fn`

** It is important to note that these types of object composition are not mutually exclusive

## Factory Functions with ES6

Composition is more of a way of thinking than a particular technique in code.
You can accomplish it in many ways.
Function composition is just the easiest way to build it up from scratch,
and factory functions are a simple way to wrap a friendly API around the implementation details.

Types of compositional relationships:

- Aggregation: imply control over sub-object lifecycles
  - An object which contains other objects
- Delegation: JS prototypes are delegates, object forwards to another object
- Concatenation: dynamic object extension (JS)
  - Adding new properties to an existing object

These are not the only types of object composition. It's possible to form loose, dynamic relationships between objects
through acquaintance/association relationships where objects are passed as parameters to other objects (dependency injection), and so on.

Look for ways to compose where a small change to program requirements would require a small change to the code.

Express your intention clearly and concisely.

### Aggregation

Aggregation is when an object is formed from an enumerable collection of sub-objects.

Each sub-object in an aggregation keeps its reference identity, and could be loss-lessly destructured from the aggregate.

Examples include, but are not limited to: arrays, maps, sets, graphs, trees, DOM nodes, UI components (parent and child).

Aggregation is used when objects need to share common operations or when you want a single item to share the same interface as many items.
They're great for applying universal abstractions.

If there are potentially more than 100,000 or 1M of sub-objects, stream processing may be more efficient.

### Concatenation

Concatenation is when an object is formed by adding new properties to an existing object.

Examples include, but are not limited to: plugins added to `jQuery.fn` via concatenation, state redures (e.g. Redux), functional mixins.

Use it to progressively assemble data structures at runtime.

### Delegation

Delegation is when object forwards or delegates to another object.

Use it to conserve memory. Also, it can be used to dynamically update many instances.

## Factory Function

Any function can return an object, but when it does so without a `new` keyword, it's a **factory function**.

They easily produce object instances w/out diving into the complexities of classes and the `new` keyword.

Keep in mind the following:

- Returning objects
- Destructuring arguments from objects/arrays
- Computed property keys from tuples
- Default parameters in function signature
- Type inference

Composition is a way of thinking than a particular technique in code. There are many ways to accomplish composition.
However, it is easier built from scratch, and factory functions are a simple way to wrap an API around the implementation
details.

"Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function."
- John Carmack

## Why Composition Is Harder With Classes

What does the `new` keyword actually do:

- Creates new object and binds `this` to it in the constructor function
- Implicitly returns `this`, unless you explicitly return another object
- Sets the instance `[[Prototype]]` (an internal interface) to `Constructor.prototype` so that `Object.getPrototypeOf(instance) === Constructor.prototype`
  and `instance.__`
  - Object values in JS are memory references under the hood, and diff frames point to diff locations in mem, so `===` checks will fail
  - `.constructor` could be useful to make generic functions that return a new instance of whatever object passed in
    - Having a reference to the constructor is not the same thing as know how to instantiate a new object with it

Classes are not a good solution for composing functional mixins, you could, but it's more complex and costly.

What we can use is the static method on any factory or constructor called `.of()`. The `.of()` method is a factory that
returns a new instance of the data type containing whatever you pass into `.of()`.

```javascript
const createUser = ({
  userName = 'Anonymous',
  avatar = 'anon.png'
} = {}) => ({
  userName,
  avatar,
  constructor: createUser
});
createUser.of = createUser;
// testing .of and .constructor:
const empty = ({ constructor } = {}) => constructor.of ?
  constructor.of() :
  undefined
;
const foo = createUser({ userName: 'Empty', avatar: 'me.png' });
console.log(
  empty(foo), // { avatar: "anon.png", userName: "Anonymous" }
  foo.constructor === createUser.of, // true
  createUser.of === createUser       // true
);
```

### Class To Factory Is A Breaking Change

Factories allow increased flexibility in the following ways:

- Decouple instantiation details from calling code
- Allow you to return arbitrary objects - for instance, to use an object pool to tame the garbage collector
- Don't pretend to provide any type guarantees, so callers are less tempted to use `instanceof` and
  other unreliable type checking measures, which might break code
- Because they don't pretend to provide type guarantees, factories can dynamically swap implementation for abstract factories
  - For example, media player that swaps out the `.play()` method for different media types
- Adding capability with composition is easier with factories

Be mindful that `this` may be dynamically bound from factory call sites, which is not the case when callers use `new`.
That can complicate matters if you want to store alternate abstract factory prototypes as static properties on the factory.

### Code Requiring `new` Violates The Open/Closed Principle

Since a common extension to a class is to turn it into a more flexible factory, but that change requires the `new` keyword, then
it makes our code closed for extension and open to breaking changes.

Sometimes it's a better idea to deprecate the class entirely and replace it with a factory function.

### `class` Advantages

`class` offers 2 kinds of performance optimizations:

1. Shared mem for properties stored on the delegate prototype
2. Property lookup optimizations

A factory can set the prototype by setting the `__proto__` property in an object literal, or using `Object.create(proto)`.

There are exceptions, of course. RxJS used class instances because they’re faster than closure scopes, but 
RxJS is a general purpose utility library that might be used in the context of hundreds of thousands operations that 
need to be squeezed into a 16ms render loop.

It makes sense for libraries like ThreeJS and RxJS to go to extremes optimizing wherever they can. For regular apps,
focus on network calls & payloads, animations, asset caching strategies, etc. Don't micro-optimize, until you find a bottleneck.

### `class` Inheritance With `extends`

- Tight coupling
- Inflexible hierarchies
- Gorilla/banana problem
- Duplication by necessity

### Classes Are Ok If You're Careful

- Avoid `instanceof` - it lies bc JS is dynamic and has multiple execution contexts
  - It can also cause problems if you switch to an abstract factory
- Avoid `extends` - don't extend a single hierarchy more than once
  - "Favor object composition over class inheritance" - Design Patterns: Elements of Reusable Object-Oriented Software
- Avoid exporting your class
  - Use `class` internally for performance gains, but export a factory that creates instances in order to discourage users
    from extending your class and avoid forcing callers to use `new`
- Avoid `new`
  - Export a factory instead

Ok to use class when:

- Building UI components for a framework, i.e. React, Angular.
- You never inherit from your own classes or components
- You need to optimize performance

Factories are simpler than classes or constructors in JavaScript. Always start with the simplest solution and 
progress to more complex solutions only as-needed.

## Composable Datatypes With Functions

In JS, the easiest way to compose is function composition, and a function is just an object you can add methods to.

```js
const t = value => {
  const fn = () => value;
  fn.toString = () => `t(${ value })`;
  return fn;
};
const someValue = t(2);
console.log(
  someValue.toString() // "t(2)"
);
```

You can do this with any data type, as long as there is composition operation that makes sense, i.e.:

- List or strings, it could be concatenation
- For DSP (Digital Signal Processing) it could be signal summing

The question is which operation best represents the concept of composition?

## Lenses

Composable getters and setters for functional programming.

A lens is a composable pair of pure getter and setter functions which focus on a particular field inside an object, and obey a set of axioms known as the lens laws.

NOTE: for production code, look at a well-tested library like Ramda, the lenses expressed there are in more composable, elegant ways than other libs.

### Why Lenses?

State shape dependencies are a common source of coupling in software. Many components may depend on the shape of some shared state, so
if you need to later change the shape of that state, you have to change logic in multiple places.
Lenses allow you to abstract state shape behind getters and setters.

### Lenses Background

In 1985, these getter/setter pairs were a bit like referenced queries which have existed in relational DBs for decades.

Lenses are more generic and composable, and were popularized after Edward Kmett released the Lens library for Haskell.
He was influenced by Jeremy Gibbons and Bruno C. d. S. Oliveira, who demod that traversals express the iterator pattern,
Luke Palmer's "accessors", Twan van Laarhoven, and Russell O'Connor.

### Lens Laws

They are algebraic axioms ensuring the lens is well behaved:

1. `view(lens, set(lens, a, store)) = a` - setting a value in store, and immediately viewing it through the lens, you get the value that was set
2. `set(lens, b, set(lens, a, store)) = set(lens, b, store)` - setting a lens value to `a` then immediately setting it to `b`, it's the same as if you'd just set the value to `b`
3. `set(lens, view(lens, store), store) = store` - getting the lens value from the store, and then immediately setting it back to the store, the value is unchanged

When you compose lenses, the resulting lens will dive deep into the object, traversing the full object path.

## Transducers: Efficient Data Processing Pipelines in JS

A transducer is a composable higher-order reducer. It takes a reducer as input, and returns another reducer.

Transducers are:

- Composable using simple function composition
- Efficient for large collections w/multiple operations
  - Only enumerates over the collection once, regardless of the # of operations in the pipeline
- Able to transduce over any enumerable source (e.g. arrays, trees, streams, graphs, etc.)
- Usable for either lazy or eager evaluation with no changes to the transducer pipeline

### Why Transducers?

When we process data, it's useful to break up the processing into multiple independent, composable stages.

### Background & History

Instead of arrays and arrays processing, everything is represented as a stream of values in a continuously running,
interactive program loop. Each value is processed by each node as it arrives at the parameter input.

Transducers have impacted data flow programming, signal processing for scientific and media applications, networking,
AI, etc.

To use transducers in PROD, recommendation is to use an existing lib which implements the transducers protocol for
interoperability reasons.

Apply transducers in any context, w/any lib, in any language that supports closures and high-order functions.

There are two data flow ways:

- Pull: lazy evaluation, waits until a consumer asks for the next value
- Push: eager evaluation, enumerates over the source values and pushes them through the tubes as fast as it can

Transducers don't care whether you pull or push, they have no awareness of the data structure they're acting on, they simply
call the reducer to pass into them to accumulate new values.

Transducers are higher order reducers: reducer functions that take a reducer and return a new reducer.

```
transducer = ((accumulator, current) => accumulator) => ((accumulator, current) => accumulator)
```

Some popular libraries which support transducers include Ramda, RxJS, and Mori.

Transducers compose top-to-bottom, left to right.

### Transducer Rules

1. Initialization - a transducer must call the step function to produce a valid initial value to act on; value should
                    represent an empty state.
  I. When called with no arguments, a reducer should always return a valid initial (empty) value for the reduction.
2. Early termination - must check for and stop when it receives a reduced accumulator value; a transducer step function
                        that uses a nested reduce must check for and convey reduced values when they're encountered.
3. Completion (optional) - some transducing processes never complete, but those that do should call the completion function
                            to produce a final value and/or flush state. Stateful transducers should supply a completion
                            operation to clean up accumulated resources

### The Transducer Protocol

Transducers are not really a single function, but 3 different functions.

In computer science, the arity of a function is the number of arguments a function takes. In the case of transducers,
there are 2 arguments to the reducer function:

1. The accumulator
2. The current value

All languages handle transducer protocol differently, JS transducers are a function that take a transducer and return a
transducer. The transducer is an object with 3 methods:

1. `init` - return a valid initial value for the accumulator (usually just called the next `step()`)
2. `step` - apply the transform, e.g. for `map(f)`: `step(accumulator), f(current))`
3. `result`

### Transducers Conclusion

Transducers are composable, higher-order reducers which can reduce over any underlying data type.

Transducers produce code that can be orders of magnitude more efficient than dot chaining with arrays, and handle potentially
infinite data sets without creating intermediate aggregations.

NOTE: transducers aren't always faster than built-in array methods, performance benefits kick in when data sets are very large,
or pipelines are quite large, always remember to profile.

Use transducers when needing to subscribe to streams of data and want to process the data in the stream before using it in app code.
Whenever needing to combine a `n` of operations, such as `map`, `filter`, `chunk`, `take` and so on, use transducers
to optimize the process and keep code readable and clean.

## Elements of JavaScript Style

Use guidelines as, well, guides, not as immutable laws. There may be valid reasons to deviate from them.

Almost every guideline from the elementary principles of composition applies to source code:

- Make the function the unit of composition (one job for each function)
  - The ideal function is simple, deterministic, pure function:
    - Given the same input, always return the same output
    - No side effects
- Omit needless code
  - More code creates more surface area for bugs, less code = fewer places for bugs
  - Concise code is more legible, less code = less syntax noise and stronger signal for meaning transmission
  - Concise code is more vigorous
  - Omit needless variables, the human brain has a limited number of resources available in working memory, each
    var must be stored as a discrete quanta, occupying working mem slots
  - Use **point-free style** by defining functions without referencing the args on which the functions operate, i.e. function composition
  - Do the same thing with any functor, anything you can map over
- Use active voice, it is more direct and vigorous
  - Name things as directly as possible
  - Name predicates and booleans as if they were questions
  - Name functions using verb forms
    - Event handlers are an exception to the verb rule since they're used as qualifiers, they express when to do it instead of what to do
- Avoid a succession of loose statements
  - An excess of procedures is a recipe for spaghetti code
- Keep related code together
  - For smaller projects, it's fine to group files by technical type
  - For larger projects, it's better to group files by feature (domain-driven)
    - Colocate files related by feature
- Put statements and expressions in positive form
  - Prefer strong negative statements if you care about a variable that it's missing or unknown, i.e. `missingValue`, `anonymous`, `isEmpty`
- Use parallel code for parallel concepts
  - Id the parts that are the same, and build an abstraction that allows you to supply only the parts that are different

### Elements of Style Conclusion

Be simple, but not simplistic.

Use techniques such as concise syntax, currying & composition.

Assume the code reader knows nothing about the implementation, but do not assume the reader is stupid. Be clear, but
don't dumb it down.

## Mocking is a Code Smell

### Unit Tests

Unit tests test individual units (modules, functions, classes) in isolation from the rest of the program.

Unit tests are different from integration tests. Functional tests are a subset of integration tests, because
they test all the units of an app, integrated in the context of the running app.

**Black box testing** is done using only the public interface of the unit, leads to less brittle tests, bc 
the implementation details of a unit tend to change more over time than the public API of the unit.

In **white box testing** tests are aware of implementation details, any change to the logic could break the test, even if
the public API continues to function as expected. White box testing leads to wasted rework.

### Code Coverage

**Code coverage** refers to the amt of code covered by test cases. In general, we try to produce a high level of coverage, but
code coverage starts to deliver diminishing returns as it gets closer to 100%.

There are 2 types of coverage:

1. Code coverage: how much code is exercised
2. Case coverage: how many of the use-cases are covered by the test suites

Case coverage refers to context of real world environment, with real users, real networks, and even hacker-cases.

100% code coverage does not guarantee 100% case coverage.

Developers targeting 100% code coverage are chasing the wrong metric.

A mock is a test double that stands in for real implementation code during the unit testing process, capable of producing assertions
about how it was manipulated by the test subject during a test run.

All mocks are tightly coupled to the code. 

Don't get over-focused to have 100% unit test coverage. Don't waste your time wedging dependency injection into your app,
so you can mock the whole world.

A code smell is a surface indication that usually corresponds to a deeper problem in the system, but it doesn't mean
it is def wrong, or that something must be fixed right away. It is a rule of thumb to alert you to improve something.

NOTE: not all mocking is bad. Some code needs diff levels of mocks, or diff kinds.

### Tight Coupling

Tight coupling makes code more rigid and brittle: more likely to break when changes are required.

Coupling takes diff forms:

- Subclass coupling: dependent on the implementation and entire hierarchy of the parent class
- Control dependencies: code that controls its dependencies by telling them what to do
- Mutable state dependencies: code that shares mutable state with other code
- State shape dependencies: code that shares data structures with other code, and only uses a subset of the structure
- Event/message coupling: code that communicates w/other units via message passing, events, etc.

Tight coupling has many causes:

- Mutation vs immutability
- Side-effects vs purity/isolated side-effects
- Responsibility overload vs do one thing (DOT)
- Procedural instructions vs describing structure
- Class inheritance vs composition

Imperative and object-oriented code is more susceptible to tight coupling than functional code, since pure functions are less 
vulnerable to tight coupling by nature.

How do pure functions reduce coupling?

- Immutability
- No side effects
- Do one thing
- Structure, not instructions

### TDD Should Lead to Better Design

The process of learning effective TDD is the process of learning how to build more modular apps.

### Composition And Mocking

Mocking is required when our decomposition strategy has failed.

When you use generic composition utilities, each element of the composition can be unit tested in isolation
without mocking the others. They'll contain *zero unit-testable logic*, so there's nothing meaningful to unit test;
you need integration tests instead.

Declarative style means we’re telling the computer the relationships between things.
It’s a description of structure using equational reasoning.

The more dependencies your unit has, the more likely it is that there may be problematic coupling.

Remember: Logic and I/O are separate concerns. Logic is thinking. Effects are actions. Think before you act!

### Code Smells Are Warning Signs, not Laws

Mocks are not evil.

### Mocking is Great for Integration Tests

Because integration tests test collaborative integrations between units, it’s perfectly OK to fake servers,
network protocols, network messages, and so on in order to reproduce all the various conditions you’ll encounter 
during communication with other units, potentially distributed across clusters of CPUs or separate machines on a network.
