# Golang

## Functions

Any function that performs side effects (like I/O) MUST BE a method of a type. 
I/O requires context, requires mocking to test, thus any function that performs I/O benefits from a type receiver.

Pure functions MAY BE declared on their own, as their output is entirely defined by their input,
and don’t require mocking to test.

## Pointer Receiver Functions/Methods

If a method does not modify the pointer receiver, then it is not needed to have a pointer receiver method.

* If you see one non-pointer method, all methods are non-pointer
    * Guaranteeing that the type is side effect free everywhere, regarding the receiver
* If you see one pointer method, all methods are pointer receivers, making no guarantee 
  that the type is side effect free anywhere, regarding the receiver

## Pointers

Pointer receivers create an uncertainty from the outside, whether there will be side effects on the called type or not.
Only non-pointers guarantee anything.

Non-pointer or pointer receiver type the method implements is handled transparently to the client, 
fitting with <ins>the overall design of `golang` to put behavior control at the called location and not the type caller</ins>.

## Defaults In Code For Client Responses

For ease of support, it is never good to send data to a client that the client didn’t ask for. 
In that way, data evolves and can never impact the client (no backward compatibility issues). 
In other words, no defaults ever!

To help with that, use some type of extensibility parameters that allow clients to request for
the specific information they require. 

If client only needs user’s first name, calling something like
`GET /users?$extend=$select(profile=first_name)` or something similar would return only the 
logged-in user's profile's first name.

## Naming Conventions

https://talks.golang.org/2014/names.slide
