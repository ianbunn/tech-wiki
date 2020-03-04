# Javascript

## [MDN Web Docs](https://developer.mozilla.org/)

### First class functions

First class functions are treated like any other variable:

- A first class function can be passed as an argument to other functions
  - A function that is passed as an argument to another function is a callback function
- A first class function can be returned by another function
  - A function that returns a function are called high-order function
  - You have to user another variable to return the function itself without invoking its returned function
- A first class function can be assigned as a value to a variable

---

### Non-browser environments

Many non-browser environments use JS, such as:

- Node.js
- Apache CouchDB
- Adobe Acrobat

---

### Prototype-based programming language

JS is a prototype-based programming language:

- Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object
  - An object refers to a data structure containing data and instructions for working with the data
    - JS, Java, C++, Python, and Ruby are examples of object-oriented programming languages
  - A class defines an object’s characteristics
    - Class is a template definition of an object’s properties and methods, the “blueprint” from which other more specific instances of the object are drawn
- This type of style allows the creation of an object without first defining its class

JS is a **multi-paradigm**, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

---

### Map() Object

The `Map()` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

#### Properties

`Map.length` - the value of the `length` property is `0`.

`get Map[@@species]` - the constructor fx that is used to create derived objects.

`Map.prototype` - represents the prototype for the `Map` constructor. Allows the addition of properties to all `Map` objects.

#### How to use

```js
let kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use the regular Map constructor to transform a 2D key-value Array into a map
let myMap = new Map(kvArray)

myMap.get('key1') // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())) // ["key1", "key2"]
```

Reference: [MDN web docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

---

## You Don't Know JS (YDKJS)

### Javascript execution

JS is an interpreted language, because your JS source code is processed each time the code runs

- JS's V8 engine compiles the program on the fly and then immediately runs the compiled code
- ---

### Expressions

Expressions are statements made up of one or more expressions. Some examples include:

```Javascript
a = b * 2
```

- `2` is a *literal value* expression
- `b` is a *variable* expression
- `b * 2` is an *arithmetic* expression
- `a = b * 2` is an *assignment* expression

General expressions are not very commonly used. General expressions run the arithmetic expression, but it will not do anything with the result, `b * 2;`

Expression statements are the function call to itself, `alert(a);`

---

### Booleans

Booleans are **TRUE** or **FALSE**.