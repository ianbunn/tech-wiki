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

