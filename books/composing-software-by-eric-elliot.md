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

Left off here: https://medium.com/javascript-scene/composable-datatypes-with-functions-aec72db3b093

Reference: 
[Medium/javascript-scene/object-composition](https://medium.com/javascript-scene/the-hidden-treasures-of-object-composition-60cd894803810)
