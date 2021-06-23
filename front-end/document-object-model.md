# Document Object Model (DOM)

The DOM is a programming interface for HTML and XML documents.

- The DOM represents the documents as nodes and objects, that way programming languages can connect to the page
- A web page is a document
  - The DOM represents that same document in the browser window and HTML source so it can be manipulated

## DOM Standards

The W3C DOM and WHATWG DOM standards are implemented in most modern browsers.

## DOM Data Types

- `document`: this object is the root `document` object itself
- `element`: refers to an element or a node of type `element` returned by a member of the DOM API
- `nodeList`: an array of elements, like the kind that is returned by the method `document.getElementsByTagName()`
- `attribute`: an object reference that exposes a special interface for attributes (attributes are nodes in the DOM just like elements)
- `namedNodeMap`: an array, but the items are accessed by name or index
  - Has an `item()` method for this purpose, so you can add/remove items from a `namedNodeMap`

## DOM and JavaScript

The DOM is not a programming language, but without it, JS wouldn't have any model or notion of web pages, HTML documents, XML documents, and their compenent parts (elements).

- Every element in a document is part of the DOM for that document, so they can all be accessed and manipulated using the DOM and a scripting language like JS

To access the DOM, you can immediately begin using the API for the document or window elements to manipulate the document itself or to get at the children of a document

## DOM Reference Links

[MDN web docs `Document`](https://developer.mozilla.org/en-US/docs/Web/API/document)

[MDN web docs `Element`](https://developer.mozilla.org/en-US/docs/Web/API/element)

[Back home](../README.md)
