# REST API

API is an important player between client-server communication, so we should always design APIs with best practices in mind.

REST stands for **Representational State Transfer**. It's a software architectural style created by *Roy Fielding* in 2000 to guide the design of architecture for web.

Any API that follows REST design principles is said to be RESTful.

## Best Practices

1. Use JSON as the format for sending and receiving data. Use the `Content-Type` response header to `application/json`
2. Use **nouns** instead of **verbs** in endpoints
    - Do not use verbs
    - Let the HTTP verbs handle what the endpoints do
3. Name collections with plural nouns to tell the client that there could be some other posts in the collection
4. Use status code in error handling
5. Use nesting on endpoints to show relationships, but avoid nesting that is more than 3 levels deep, as this is not elegant and less readable
6. Use filtering, sorting, and pagination to retrieve the data requested to lessen the load on the server
    - Use offset and limit as query parameters
7. Use SSL (secure socket layer) for security to prevent malicious attacks
    - Make communication between the server and client private ensuring that anyone consuming the API doesn't get more than what they request
    - Clear difference is having `https` in front of domain instead of `http` (does not run on SSL)
8. Be clear with versioning
    - One of the most common version stystems in web dev is *semantic versioning*, i.e. 1.0.0, 2.1.2 and 3.3.4
      - The first number represents the major version
      - The second number represents the minor version
      - The third number represents the patch version
    - When you make REST APIs available this way, you are not forcing clients to migrate to the new versions in case they choose not to
9. Provide accurate API documentation
    - Docs should contain:
      - Relevant endpoints
      - Example requests
      - Implementation in several programming languages
      - Messages listed for different errors with their status code
    - Swagger is the most common tool to document APIs
    - Postman is also another alternative to document APIs

Reference: [freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/](https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/)
