# JavaScript

## MDN Web Docs

### First class functions

First class functions are treated like any other variable:

- A first class function can be passed as an argument to other functions
  - A function that is passed as an argument to another function is a callback function
- A first class function can be returned by another function
  - A function that returns a function are called high-order function
  - You have to user another variable to return the function itself without invoking its returned function
- A first class function can be assigned as a value to a variable

### Non-browser environments

Many non-browser environments use JS, such as:

- Node.js
- Apache CouchDB
- Adobe Acrobat

### Prototype-based programming language

JS is a prototype-based programming language:

- Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object
  - An object refers to a data structure containing data and instructions for working with the data
    - JS, Java, C++, Python, and Ruby are examples of object-oriented programming languages
  - A class defines an object’s characteristics
    - Class is a template definition of an object’s properties and methods, the “blueprint” from which other more specific instances of the object are drawn
- This type of style allows the creation of an object without first defining its class

JS is a **multi-paradigm**, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.