# Pluralsight Express.js Course

## Express.js

Some built-in functions (named after HTTP verbs) are:

- .post(...)
- .put(...)
- .patch(...)
- .delete(...)

Express extends Node HTTP objects using JavaScript inheritance. This is what express looks like under the hood:

```js
var req = exports = module.exports = {
    __proto__: http.IncomingMessage.prototype
};
```

```js
var res = module.exports = {
    __proto__: http.ServerResponse.prototype
};
```

We typically don't want to use Express.js to send an `text/html` response. For server-side templates, checkout **EJS** or **Jade**.

### Express.js Use Cases

Express.js is a great fit to build Web APIs to be consumed by rich JavaScript applications.

These JS apps add an interactive user experience.

### Express Middleware

Middlewares are functions executed **sequentially** that access *request* and *response*.

Middleware functions could be set in order for:

a. Middleware A = Validation

```js
app.use(function(request,response,next){
    ...
    // Calling next() in Middleware A will invoke Middleware B, and so on
    next();
});
```

b. Middleware B = Authentication

```js
...next();
```

c. Middleware C = Data Parsing

```js
...next();
```

d. Then complete the request and response is sent

```js
app.use(function(request,response,next){
    ...
    response.send("done!");
});
```

If you call `next();` after `response.send(...)` has been executed will cause errors, so remaining Middleware(s) will not run.

Read the `static` Middleware source in Express.js to understand the basics of what it does under the hood, but basically:

```js
exports = module.exports = function serveStatic(root, options){
    ...
    return function serveStatic(req,res,next){
        if(req.method !== "GET" && req.method !== "POST"){
            return next();
        };
        ...
    };
    ...
    stream.pipes(res);
};
```

### Express.js Logger

A good example of a logger is the [GitHub project by Express.js Morgan](https://github.com/expressjs/morgan)

### Express.js Query String Parameters

Anything that comes after a url's `?` is considered a `query string parameter`. These `query string parameters` are read to respond appropriately from the server.

Use `request.query` to access query strings.

### Creating Endpoints using Express.js

To create dynamic routes, placeholders can be used to name arguments part of the **URL path**.

`/blocks/:name...` creates **name** property on the **request.params** object.

If we don't have a `:name` in our object, then we will get a `404` not found error. Since when we do a request to an object might return `undefined`, we can run an `if` statement to check if the request parameter is found in our object.

### Using Routes

Routes need to match exactly the route name, but that might not always be the case with the user's request. We will have to normalize the request parameter after the client's request.

Using multiple route handlers is useful for **re-using Middleware** that loads resources, performs validations, authenticates, etc.

### Using Forms with Express.js

Before we begin taking client data, we need to parse the object using `body-parser` NPM package.

Form submitted data can be accessed through `request.body`.

### Route Repetition

Chaining means calling functions on the return value of previous function.

Chaining is using `.` in front of a built-in method to remove intermediate variables.

```js
var express = require('express');
var app = express();
...
app.route('/blocks).
    .get(function(response,request){
        ...
    });
    .post(function(response,request){
        ...
    });
```