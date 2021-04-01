# Composing Software

By Eric Elliot

Ref: [Medium/javascript-scene/composing-software](https://medium.com/javascript-scene/composing-software-the-book-f31c77fc3ddc)

## Object Composition

"Favor object composition over class inheritance" -Gang of Four, "Design Patterns"

Software dev has a tendency to overuse class inheritance.

Class inheritance is the tightest form of coupling available in object-oriented design, which leads to many common problems, including:

* Fragile base class problem
* Gorilla/banana problem
* Duplication by necessity problem

Class inheritance accomplishes reuse by abstracting a common interface into a base class that subclasses can inherit from, add to, and override.

There are 2 important parts of abstraction:

* Generalization: extracting only the shared properties and behaviors that serve the general use case
* Specialization: providing the implementation details required to serve the special case

There are some other good alternatives to class inheritance, which include:

* Simple functions
* Higher order functions
* Object composition

### What is object composition?

"In computer science, a composite data type or compound data type is any data type which can be constructed in a program using the programming language's primitive data types and other composite types...The act of constructing a composite type is known as composition" -Wikipedia

There are many diff ways to compose objects. Diff forms of composition will produce diff composite structures and diff relationships between the objects.

When objects depend on the objects they're related to, those objects are coupled, meaning changing one could break the other.

Advice from the Gang of Four (Design Patterns) is to think of our objects as a composition of smaller, loosely coupled objects rather than wholesale inheritance from a monolithic base class.

Monolithic systems, where you can't change or remove a class w/out understanding and changing many other classes, becomes a dense mass that's hard to learn, port and maintain.

### 3 diff forms of object composition

* Aggregation (not true in a language w/dynamic object extension)
  * In JS, aggregations does not imply control over suboject lifecycle
  * An object which contains other objects
    * Each suboject retains its own ref ID, so it could be decoupled from the aggregation w/out info loss, e.g., arrays, trees, etc.
* Delegation
  * When an object forwards to another object
    * JS's prototypes are delegates: array instances fwd built-in array method calls to `Array.prototype`, objects to `Object.prototype`, etc.
* Concatenation (dynamic object extension)
  * Properties can be concatenated one at a time or copied from existing objects, e.g., jQuery plugins are created by concatenating new methods to the jQuery delegate prototype, `jQuery.fn`

Paused here: [Medium/javascript-scene/object-composition](https://medium.com/javascript-scene/the-hidden-treasures-of-object-composition-60cd89480381) at 3 dif forms of object composition.

Ref: [Medium/javascript-scene/object-composition](https://medium.com/javascript-scene/the-hidden-treasures-of-object-composition-60cd894803810)