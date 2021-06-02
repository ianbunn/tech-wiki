# Hypertext Transfer Protocol

HTTP is an application-layer protocol for transmitting hypermedia documents, such as HTML

- A complete doc is reconstructed from the different sub-documents fetched, for instance:
  - Text
  - Layout description
  - Images
  - Videos
  - Scripts
  - And more...

HTTP was designed for browser and web server communication

- Follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response
- Communicate by exchanging individual messages, as opposed to a stream of data
- Messages sent by the client (web browser) are called *requests*, and the messages sent by the server as an answer are called *responses*

HTTP is a stateless protocol, meaning the server doesn't save any data (state) between two requests

HTTP can be used on any reliable transport layer, as long as the protocol doesn't lose messages silently, such as UDP

- Most common transport layer TCP/IP

HTTP can also be used to fetch parts of documents to update Web pages on demand

![HTTP](https://mdn.mozillademos.org/files/13673/HTTP%20&%20layers.png)

## Components of HTTP-based systems

Between HTTP request and responses, there are numerous entities, collectively designated as *proxies*, which perform different operations and act as *gateways* or *caches*.

- In reality there are more computers between a browser and the server handling the request
  - There are:
    - Routers
    - Modems
    - And more...
  - These are hidden in the network and transport layers
  - HTTP is on top of at the application layer

![Client-server path](https://mdn.mozillademos.org/files/13679/Client-server-chain.png)

## Client: the user-agent

User-agent is any tool that acts on the behalf of the user

- The browser is usually the entity initiating the request
- The browser translates the user directions in HTTP requests, and further interprets the HTTP responses to present the user with a clear response

## The Web server

The server serves the document as requested by the client

A server presents only as a single machine *virtually*:

- This is because it may actually be a collection of servers, sharing the load (load balancing) or a complex piece of software interrogating other computers (like cache, a DB server, e-commerce servers, etc.), totally or partially generating the document on demand
  - A server is not necessarily a single machine, but several servers can be hosted on the same machine
  - With `HTTP/1.1` and the `Host` header, they may even share the same IP address

## Proxies

Between the web browser and the server, numerous computers machines relay the HTTP messages

Due to the layered structure of the Web stack, most of these operate at either:

- Transport level
- Network level
- Physical level

Some proxies become transparent at the HTTP layer and potentially making a significant impact on performance. Those operating at the *application layers* are generally called *proxies*

Transparent means that it can change requests going through them, and may perform numerous functions:

- Caching (cache can be public or private, like the browser cache)
- Filtering (antivirus scan, parental controls, etc.)
- Load balancing (to allow multiple servers to serve different requests)
- Authentication (control access to different resources)
- Logging (allowing storage of historical information)

## Basic aspects of HTTP

Even with more complexity introduced in HTTP/2 by encapsulating HTTP messages into frames, HTTP is generally designed to be simple and human readable

- HTTP is simple
- HTTP is extensible
  - Introduced in HTTP/1.0, `HTTP headers` made this protocol extensible
  - New functionality can be introduced by a simple agreement between a client and a server about a new header's semantics
- HTTP is stateless, but not sessionless
  - There is no link between 2 requests being successively carried out on the same connection
  - While the core of HTTP itself is stateless, HTTP cookies allow the use of stateful sessions
    - Using header extensibility, HTTP cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state (e-commerce shopping baskets, etc.)
- HTTP and connections
  - A connection is controlled at the *transport layer*, and therefore fundamentally out of scope for HTTP
  - Though HTTp doesn't require the underlying transport protocol to be connection-based, it requires it to be reliable and not to lose messages (at a minimum presenting an error)
  - Among the most common transport protocols on the Internet, TCP is reliable and UDP isn't
    - HTTP susequently relies on the TCP standard, which is connection-based, even though HTTP does not always require a connection
  - HTTP/1.0 opened a TCP connection for each request/response exchange making the messages take several round-trips, therefore slowing down the connection, but was efficient when several messages were sent, and regularly sent
    - Warm connections are more efficient than cold ones
    - To mitigate these flaws, HTTP/1.0 introduced pipelining and persistent connections:
      - The underlying TCP connection can be partially controlled using the `Connection` header
      - HTTP/2.0 went a step further by multiplexing messages over a single connection, helping keep the connection warm
  - Google is experimenting with QUIC which builds on UDP to provide a more reliable and efficient transport protocol

### What can be controlled by HTTP

The extensible nature of HTTP has, over time, allowed for more control and functionality of the Web

Cache or authentication methods were functions handled early in HTTP history. The ability to relax the **origin constraint** has only been added in the 2010s

Here is a list of common features controllable with HTTP:

- Cache: the server can instruct proxies, and clients, what to cache and for how long
  - Client can instruct intermediate cache proxies to ignore the stored document
  - **Relaxing the origin constraint**: helps to prevent from snooping and other privacy concerns
    - Web browsers enfore strict separation between Web sites

[Back home](./README.md)
