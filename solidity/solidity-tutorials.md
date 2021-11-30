## Solidity Tutorials

## Arrays

### Array operations

- Get
- Set
- Add
- Delete

### Storage vs Memory Arrays

**Storage array vars:**

- Define contract state
- Persist throughout contract execution
- Dynamic (can change size)
- More expensive, meaning more gas!

**Memory array vars:**

- Used locally
- Exist only within the function in which they are initialized
- Static (cannot change size)
- Less expensive to use, less gas!

**Value vs reference type**

- Value type:
  - Basic vars type
  - Various integers, booleans, addresses, string literals
  - Value is copied upon assignment
  - New location in memory created
- Reference type:
  - More complex types
  - Arrays, structs
  - Vars and another vars are the same
  - Create points to a location in memory

## Functions

Functions - basic syntax - constructors, events

- Start file with `pragma solidity v.0.424`
- Everything is inside of a `contract nameOfContract { //xyz }` code block
- Use semicolon to end code lines
- To print or log, use the `event methodToPrint(uint uintToPrint);`
  - Then you `emit methodToPrint(anUINTvar);` to run print
- `constructor() { //xyz }` is the new way to run the main function in a contract

Functions - arguments and return values

- Explicit type casting for function input args and return values

Functions - keywords and modifiers - external, public and private - view vs pure vs payable functions - modifiers and fallback functions

- External - only accessible from other contracts
  - Use less gas
  - Cannot be used in the same contract
- Public - accessible everywhere
- Internal - only accessible within a contract and any that inherit from the same contract
  - Subcontracts also have access to internal functions
- Private - only accessible within a contract
- View function - cannot modify state, but no error is thrown, it’s just not executed
- Pure function - cannot read from or modify state
- Payable function that allows payment to be received
  - It is required when receiving payment
- Fallback function - called when no other function matches the function call
  - Keeps all the ether sent to the contract
  - Only one allowed within a contract
- Modifier to make sure that a requirement is met
  - Added to a function at the end of it to check if it meets a condition, otherwise throw an error
- Keyword and modifiers can be combined

## Control Flow

Control flow - if statements and variants

- Use less if statements to make contracts use less gas
- Similar to many other conditional statements in other languages with `if {} else if {} else {}` syntax as well as chaining with chaining conditions with boolean operators

Control flow - while loops and keywords (break, continue, return)

- Similar to other languages
- While loops could potentially use up all of your gas in infinite loops, so make sure you have an exit failsafe with `break` or `return`

Control flow - for loops

- Similar to other languages
