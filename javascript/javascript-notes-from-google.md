# You Don’t Know JS From Google Drive Notes

Confirm Prompt
confirm ()
confirm ("I feel awesome!")
Prompts the user a dialog to select “OK” or “Cancel”
OK = true
Cancel = false

Prompt
prompt ()
prompt ("What's your name?")
Prompts the user a dialog to input free text and return it to the console
This can be used to prompt the user for a specific input, and then assign the input to a variable

Code Comments
Comments are only for human eyes, so the compiler ignores these lines
There's a nearly infinite number of programs you could write that yield the same series of 0s and 1s
You should strive to write programs that work correctly, and programs that make sense when examined
Best practice for code comments:
Choose good names for your variables and functions
Comments should explain why and not what
Comments can explain the how if that’s particularly confusing
Syntax
//comment
This will comment a single line out from javascript code
/*
This will comment a block code out in javascript code
*/

Operators
The result of any comparison is strictly boolean value, regardless of what value types are compared
Relational comparison (inequality) operators:
Greater than >
Lesser than <
Greater than or equal to >=
Lesser than or equal to <=
For relational comparisons, there are no strict enforcement like === (strict equality), so coercion occurs when using inequality operators
var a = 41;
var b = "42";
var c = "43";

a < b;		// true
b < c;		// true

Equality operators:
Strict equals to ===
Does not use coercion, so it’s known as strict equals
Loose equals to ==
Could be true with JS coercing the types (see snippet example below)
Strict NOT equal to !==
Loose NOT equal to !=
For strict and loose equals, the rules as to which one to use boils down to knowing if your code needs a strict comparison, so you have to be certain about the values going into the variables
var a = "42";
var b = 42;

a == b;			// true
a === b;		// false

You need operators to perform actions on values

Logical Operators
There are 3 logical operators in JS
And (&&)
true && true; // =>true
true && false; // => false
false && true; // => false
false && false; // => false
Or (||)
true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false
Not (!)
!true;   // => false
!false;  // => true
Syntax
var iLoveJavaScript = true;
var iLoveLearning = false;

if(iLoveJavaScript && iLoveLearning) {
// if both are true
console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
// if none of them is true
console.log("Let's see if we can change your mind.");
} else {
// if one of them is true
console.log("You only like one but not the other? We'll work on it.");
}
//VM5851:11 You only like one but not the other? We'll work on it


Modulo Operator
modulo %
This gives you the remainder of a division
Example: console.log (18 % 7) //4

Code Block
Code block is a series of statements grouped together
In JS, a block is defined by wrapping one or more statements inside curlies
{ x = y + a + b }
Where x = y + a + b is the actual code block
Anything inside the curly brackets
Always end a CODE BLOCK with a semicolon ";"
Typically, blocks are attached to some other control statement, such as an “if” statement
var amount = 99.99;

//is amount big enough?
if (amount > 10) {  //<--block attached to `if`
amount = amount * 2;
console.log( amount ); //199.98
}


Block As Scopes
for (var i=0; i<10; i++) {
console.log( i );
}

We declare the variable `i` inside the `for` loop head, most likely because our intent is to use `i` inside the context of that `for` loop, and ignore the fact that the variable scopes itself to the enclosing scope (function or global). Block-scoping is declaring variables as close as possible, as local as possible, to where they will be used. Another example:
var foo = true;

if (foo) {
var bar = foo * 2;
bar = something( bar );
console.log( bar );
}

The variable `bar` is used in the context of the `if` statement, so it makes sense to declare it inside the `if` block. However, where we declare variables is not relevant when using var, bc they will always belong to the enclosing scope. This snippet is “fake” block-scoping, and relying on self-enforcement not to accidentally use `bar` in another place in that scope.

Block Scope is a tool to extend the “Principle of Least Exposure” from hiding info in functions to hiding info in blocks of our code. Consider the example:
for (var i=0; i<10; i++) {
console.log( i );
}

Why pollute the entire scope of a function w/the `i` variable that is only going to be used in the `for` loop?

Developers may check themselves against accidentally re-using variables outside of their intended purpose, such as being issued an error about an unknown variable for using it in the wrong place.

Conditional Statements
There are quite a few ways we can express conditionals (aka decisions) in our programs
if {}
The `if` statement expects a `boolean`, but if you pass it something that's not already `boolean`, coercion will occur
JS defines a list of specific values that are considered "falsy" bc when coerced to a `boolean`, they become `false`
Any other value not on the "falsy" list is automatically "truthy"
This conditional statement is used when a certain condition is met
If the condition is met, then the code block inside the curlies will run
var bank_balance = 302.13;
var amount = 99.99;
if (amount < bank_balance ) {
console.log("I want to buy this phone!");
}

else {}
This is used when a specific condition is false
When you have an else, you don't need to reinstate the function
const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

// can we afford the extra purchase?
if ( amount < bank_balance ) {
console.log( "I'll take the accessory!" );
amount = amount + ACCESSORY_PRICE;
}
// otherwise:
else {
console.log( "No, thanks." );
}

Sometimes you may find yourself writing a series of if..else..if statements
if (a == 2) {
// do something
}
else if (a == 10) {
// do another thing
}
else if (a == 42) {
// do yet another thing
}
else {
// fallback to here
}

Here’s another option with the switch statement
switch (a) {
case 2:
// do something
break;
case 10:
// do another thing
break;
case 42:
// do yet another thing
break;
default:
// fallback to here
}

The break is important if you want only the statement(s) in one case to run
If you omit break from a case, and that case matches or runs, execution will continue with the next case’s statement regardless of that case matching
This is so called “fall through”, which is sometimes useful/desired
switch (a) {
case 2:
case 10:
// some cool stuff
break;
case 42:
// other stuff
break;
default:
// fallback
}

Here if a is either 2 or 10, it will execute “some cool stuff” code statements

Ternary Operator
A concise form of a single if..else statement, such as:
var a = 42;

var b = (a > 41) ? console.log("hello") : console.log("world");

// similar to:

// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }


Truthy & Falsy List
“Truthy” and “falsy” nature of values: when a non-boolean value is coerced to a boolean, there’s lists to determine it’s truthiness and falsiness by looking at the lists below
Falsy
“” (empty string)
0, -0, NaN (invalid number)
null, undefined
false
Truthy
“Hello” (string)
42 (number)
[ ], [ 1, “2”, 3 ] (arrays)
{ }, { a: 42 } (objects)
function foo() { .. } (functions)

Functions
Functions are a section of code that can be called by name
Code inside it will be run each time
Functions take arguments (parameters) - values you pass in the parenthesis
Functions are a subtype of objects -- typeof returns “function”
Implies that a function is a main type
Therefore, a function can have properties
Typically use function object properties in limited cases
function printAmount() {
console.log( amount.toFixed( 2 ) );
}

var amount = 99.99;

printAmount(); // "99.99"

amount = amount * 2;

printAmount(); // "199.98"

Functions can be combined into bits of code called collections
const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
// calculate the new amount with the tax
amt = amt + (amt * TAX_RATE);

	// return the new amount
	return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount( amount );

console.log( amount.toFixed( 2 ) );		// "107.99"


Functions as Values
Not only can you pass a value to a function, but a function can also be a value assigned to variables and/or returned into other functions
Function should be viewed as an expression, much like any other value or expression
var foo = function() {
// ..
};

var x = function bar(){
// ..
};

The first function expression assigned to foo variable is known as anonymous function expression, bc it has no name
The second bar function expression assigned to x variable is known as named function expression (preferred)

Functions As Scopes
When you “pollute” the enclosing scope, there are some ways to explicitly call the function by name, so that the wrapped code executes. It would be ideal if the function didn’t need a name (or, rather, the name didn’t pollute the enclosing scope), and if the function could auto-execute. Take a look at the example below:
var a = 2;

(function foo(){ // <-- insert this

	var a = 3;
	console.log( a ); // 3

})(); // <-- and this

console.log( a ); // 2

Notice that the `function foo` is introduced with a `(`. Instead of treating the function as a standard declaration, the function is treated as a function expression.

`(function foo(){..})` as an expression means the identifier `foo` is found only in the scope where the `..` indicates, not in the outer scope. Hiding the name `foo` inside itself means it doesn’t pollute the enclosing scope, in this case, the global scope.

Anonymous vs. Named
Function expression as callback parameters, such as:
setTimeout( function(){
console.log("I waited 1 second!");
}, 1000 );

This is called an “anonymous function expression”, because `function()` has no name identifier on it.

Function expressions can be anonymous, but function declarations CANNOT! There are some drawbacks of anonymous function expressions:
No useful name to display in stack traces, which can make debugging difficult
If the function needs to refer itself for recursion, etc., the deprecated `arguments.callee` reference is unfortunately required
Another example of needing self-reference is when an event handler function wants to unbind itself after it fires
A descriptive name helps self-document the code in question

The best practice is to always name your function expressions, since inline function expressions are powerful and useful. Providing a name for your function expression effectively addresses the drawbacks mentioned above, but has no tangible downsides:
setTimeout( function timeoutHandler(){ // <-- Look, I have a name!
console.log( "I waited 1 second!" );
}, 1000 );


Immediately Invoked Function Expression (IIFEs)
In functions, (); is the part that executes it
Using IIFE is another way to execute functions
(function IIFE(){
console.log( "Hello!" );
})();
// "Hello!"

The final })(); line is what actually executes the function expression referenced immediately before it
Compare the two bottom functions below
function foo() { .. }

// `foo` function reference expression,
// then `()` executes it
foo();

// `IIFE` function expression,
// then `()` executes it
(function IIFE(){ .. })();

Because an IIFE is just a function, and functions create variable scope, IIFE are used to not affect the variables outside of it (“hiding”)
var a = 42;

(function IIFE(){
var a = 10;
console.log( a );	// 10
})();

console.log( a );		// 42

IIFE can also have return values
var x = (function IIFE(){
return 42;
})();

x;	// 42

The 42 value gets returned from the IIFE-named function being executed, and then assigned to variable x

IIFEs don’t need names, the most common form of IIFE is to use an anonymous function expression. Less common is naming an IIFE having all the aforementioned benefits over anonymous function expressions, so it’s a good practice to adopt.
var a = 2;

(function IIFE( global ){

	var a = 3;
	console.log( a ); // 3
	console.log( global.a ); // 2

})( window );

console.log( a ); // 2

In the example above, we pass in the `window` object reference, but we name the parameter `global`, so that we have a clear stylistic delineation for global v. non-global reference.

Another application of this pattern addresses the (minor niche) concern that the default `undefined` identifier might have its value incorrectly overwritten, causing unexpected results. By naming a parameter `undefined`, but not passing any value for that argument, we can guarantee that the `undefined` identifier is in fact the undefined value in a block of code:
undefined = true; // setting a land-mine for other code! avoid!

(function IIFE( undefined ){

	var a;
	if (a === undefined) {
		console.log( "Undefined is safe here!" );
	}
})();


Another version of the IIFE inverts the order of things, where the function to execute is given second, then the invocation and parameters to pass to it. This pattern is used in the UMD (Universal Module Definition) project.
var a = 2;

(function IIFE( def ){
def( window );
})(function def( global ){

	var a = 3;
	console.log( a ); // 3
	console.log( global.a ); // 2

});

The `def` function expression is defined in the second-half of the code, and then passed as a parameter to the IIFE function. Finally, the parameter `def` (the function) is invoked, passing `window` in as the global parameter.

Function Lexical Scope
Lexical Scope, AKA scope, is a collection of variables as well as the rules for how those variables are accessed by name
Only code inside that fx can access that fx's scoped variables
A variable name has to be unique within the same scope
Same variable names can appear in different scopes, see below for example
function one() {
// this `a` only belongs to the `one()` function
var a = 1;
console.log( a );
}

function two() {
// this `a` only belongs to the `two()` function
var a = 2;
console.log( a );
}

one();		// 1
two();		// 2

A scope can be nested inside another scope
If one scope is nested inside the other, code inside the innermost scope can access variables from either scope
function outer() {
var a = 1;

	function inner() {
		var b = 2;

		// we can access both `a` and `b` here
		console.log( a + b );	// 3
	}

	inner();

	// we can only access `a` here
	console.log( a );			// 1
}

outer();

Scope rules say that code in one scope can access variables of either that scope or any scope outside of it
In the example below, code inside the inner fx has access to both variables a and b
Code in our outer has access to a only
You can pass to the inner, but the inner cannot pass to the outer

Lexical Scope Look-ups
Scope look-up stops once it finds the first identifier match. The same identifier can be specified at multiple layers of nested scope, which is called “shadowing” (the inner identifier “shadows” the outer identifier). Regardless of shadowing, scope look-up always starts at the innermost scope being executed, and works its way outward/upward until the first match, and stops.

Global variables are also automatically properties of the global object, `window`, so it is possible to reference a global variable not directly by its lexical name, but instead indirectly as a property reference of the global object
window.a

This technique gives access to a global variable which would otherwise be inaccessible due to it being shadowed. However, non-global shadowed variables cannot be accessed.

No matter where a function is invoked from, or even how it is invoked, its lexical scope is only defined by where the function was declared.

Cheating Lexical
NOTE: cheating lexical scope leads to poorer performance

`eval(..)` can at runtime modify an author-time lexical scope

Using the `eval(..)` function takes a string as an argument, and programatically generate code inside of your authored code, and run the generated code as if it had been there at author time.

Consider the following code:
function foo(str, a) {
eval( str ); // cheating!
console.log( a, b );
}

var b = 2;

foo( "var b = 3;", 1 ); // 1 3

String `var b = 3;` (fixed literal) is treated, at the point of the `eval(..)` as if it was always there
Because string declares a new variable `b`, it modifies the existing lexical scope of `foo(..)`
This code creates variable `b` inside of `foo(..)` that shadows `b` declared in the outer (global) scope
`a` and `b` are found in `foo(..)`, so console prints “1 3” instead of “1 2”

Second Way to Cheat Lexical Scope
`with` is a short-hand for making multiple property references against an object without repeating the object reference itself each time.

While it is frowned upon, `with` is an example of a form of block scope, in that the scope that is created from the object only exists for the lifetime of that `with` statement, and not in the enclosing scope.

For example:
var obj = {
a: 1,
b: 2,
c: 3
};

// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;

// "easier" short-hand
with (obj) {
a = 3;
b = 4;
c = 5;
}

There’s so much more going on in the `with(obj)` reference, so consider the following:
function foo(obj) {
with (obj) {
a = 2;
}
}

var o1 = {
a: 3
};

var o2 = {
b: 3
};

foo( o1 );
console.log( o1.a ); // 2

foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2 -- Oops, leaked global!

When we pass in `o1`, the `a = 2` assignment finds the property `o1.a` and assigns the value `2`, as reflected in the subsequent `console.log(o1.a)` statement. However, when we pass in `o2`, since it doesn’t have an `a` property, no such property is created, and `o2.a` remains `undefined`.
The `with` statement takes an object, one which has zero properties, and treats that object as if it is a wholly separate lexical scope, and thus the object’s properties are treated as lexically defined identifiers in that “scope”.
While the `eval(..)` function can modify existing lexical scope if it takes a string of code with one or more declarations in it, the `with` statement actually creates a whole new lexical scope from the object you pass to it.

In addition to being a bad idea to use `eval(..)` or `with`, Strict Mode doesn’t allow these functions.

`try/catch`
In ES3, JS specified the variable declaration in the `catch` clause of a `try/catch` to be block-scoped to the `catch` block. For example:
try {
undefined(); // illegal operation to force an exception!
}
catch (err) {
console.log( err ); // works!
}

console.log( err ); // ReferenceError: `err` not found

As you can see, `err` only exists in `catch` clause, and throws an error if referenced elsewhere outside of its enclosing scope.
Many linters seem too still complain if you have 2 or more `catch` clauses in the same scope which each declare their error variable w/the same identifier name, `err`
This is not a re-definition, since the variables are safely block-scoped, but the linters still seem to complain about this fact
To avoid these annoying warnings, some devs will name their `catch` variables `err1`, `err2`, etc.
Other devs simply turn off the linting check for duplicate variable names


Performance
JS Engine has a number of cooked in performance optimizations that it runs during the compilation phase. These boil down to being able to statically analyze the code as it lexes, and pre-determine where all the variable and function declarations are within your code, so that it takes less effort to resolve identifiers during execution.

If the JS Engine, encounters an `eval(..)` or `with` in the code, it assumes that all its awareness of identifier location may be invalid, bc it cannot know at lexing time what code you may pass to `eval(..)` to modify the lexical scope, or the contents of the object you may pass to `with` to create a new lexical scope to be consulted. Your code will almost certainly run slower simply by the fact that you include an `eval(..)` or `with` anywhere in your code. There’s no getting around the fact that without the optimizations, code runs slower.

Scope & Closures
JS engine compiles your code right before (and sometimes during) execution.

You can “hide” variables and functions by enclosing them in the scope of a function. This technique tends to arise from the software design principle: “Principle of Least Privilege” [^note-leastprivilege], AKA “Least Authority” or “Least Exposure”. This principle states that in the design of software, such as the API for a module/object, you should expose only what is minimally necessary, and “hide” everything else. For example:
function doSomething(a) {
b = a + doSomethingElse( a * 2 );

	console.log( b * 3 );
}

function doSomethingElse(a) {
return a - 1;
}

var b;

doSomething( 2 ); // 15

In this snippet, the `b` and the `doSomethingElse(..)` function are likely “private” details of how `doSomething(..)` performs its job. Giving the enclosing scope “access” to `b` and `doSomethingElse(..)` is not only unnecessary, but also “dangerous”, this may be used in unexpected ways, intentionally or not, and violate precondition assumptions of `doSomething(..)`.

The more proper design to “hide” these private details inside the scope of `doSomething(..)` is shown below:
function doSomething(a) {
function doSomethingElse(a) {
return a - 1;
}

      var b;

      b = a + doSomethingElse(a * 2);

      console.log(b * 3);

}

doSomething(2); //15

In the design above, `doSomethingElse(..)` and `b` are not accessible by any outside influence, instead controlled by `doSomething(..)`. The functionality has not been affected, but the design keeps the private details “private”, which is usually considered better software.

Collision Avoidance
Another benefit of “hiding” variables and functions is to avoid unintended collision between 2 different identifiers w/the same name but different intended usages. Collision occurs in unexpected overwriting of values. For example:
function foo() {
function bar(a) {
i = 3; // changing the `i` in the enclosing scope's for-loop
console.log( a + i );
}

      for (var i=0, i<10, i++) {
	      bar(i * 2); // oops, infinite loop ahead!
      }
}

foo();

This will result in an infinite loop, because `i` is set to a fixed value of `3` and that will forever remain `<10`.

The assignment inside `bar(..)` needs to declare a local variable to use. `var i = 3` would fix the infinite loop, as this would create a “shadowed variable” declaration for `i`.

Another example of shadowed variable is shown below:
var x = -1;
function xCounter() {
var x = 0;
return function() {
++x;
return x;
};
}

console.log(x);   // -1
counter = xCounter();
console.log(counter());   // 1
console.log(counter());   // 2
console.log(counter());   // 3
console.log(x);   // still -1, global was never touched


Global “Namespaces”
A particularly strong example of likely variable collision occurs in the global scope. Multiple libraries loaded into your application can quite easily collide w/each other if they don’t properly hide their internal/private functions and/or variables.

Such libraries will create a single variable declaration, often an object, w/a sufficiently unique name, in the global scope. This object is then used as a “namespace” for that library, where all specific exposures of functionality are made as properties of that object (namespace), rather than a top-level lexically scoped identifiers themselves. For example:
var MyReallyCoolLibrary = {
awesome: "stuff",
doSomething: function() {
// ...
},
doAnotherThing: function() {
// ...
}
};


Module Management
Another option to avoid collision is the more modern “module” approach, using any of various dependency managers.Using modules, no libraries ever add any identifiers to the global scope, but are instead required to have their identifier(s) be explicitly imported into another specific scope through usage of the dependency manager’s various mechanisms.

These tools use the rules of scoping as explained here to enforce that no identifiers are injected into any shared scope, and are instead kept in private, non-collision-susceptible scopes, which prevents accidental scope collisions. You can code defensively and achieve the same results as the dependency managers do without actually needing to use them, if you so choose.

Hoisting
When a var appears inside a scope, that declaration is taken to belong to the entire scope and accessible everywhere
This behavior is called hoisting, when a var declaration is conceptually “moved” to the top of its enclosing scope
var a = 2;

foo();					// works because `foo()`
// declaration is "hoisted"

function foo() {
a = 3;

	console.log( a );	// 3

	var a;				// declaration is "hoisted"
						// to the top of `foo()`
}

console.log( a );	// 2

Take a look at this snippet:
var a;
console.log( a );

a = 2;

The variable and function declaration are “moved” from where they appear in the flow of code to the top of the code, this is called “hoisting”.

Declarations come before the assignments, so hoisting is used by the JS Engine when compiling code.

Remember that hoisting is per-scope, and function declarations are hoisted, but function expressions are NOT hoisted.

Hoisting: Functions First
Both functions and variables declarations are hoisted. A subtle detail to remember is that to avoid multiple “duplicate” declarations, functions are hoisted first, and then variables.


Function Scopes
Function scope encourages the idea that all variables belong to the function, and can be used and reused throughout the entirety of the function (and accessible even to nested scopes).

Nested Scopes
Scope is a set of rules for looking up variables by their identifier name (usually more than one scope)
Engine starts at the currently executing Scope
Looks for the variable there
If not found, moves up a level, and so on
If the outermost global Scope is reached, the search stops, whether it finds it or not

See the example below to review nested scope
function foo() {
var a = 1;

	function bar() {
		var b = 2;

		function baz() {
			var c = 3;

			console.log( a, b, c );	// 1 2 3
		}

		baz();
		console.log( a, b );		// 1 2
	}

	bar();
	console.log( a );				// 1
}

foo();

Notice that c is not available in bar(), because it’s declare inside of baz() scope
Notice that b is not available to foo(), for the same reason above
When you try to access a variable’s value in a scope that’s outside of it, you’ll get a ReferenceError

Compiling Theory
In a traditional compiled-language process, a chunk of source code will undergo, typically, 3 steps before it’s executed:
1. Tokenizing/Lexing
   Breaking up a string of characters into meaningful chunks, called tokens
   Consider var a = 2;
   This program would be broken into the following tokens:
   var
   a
   =
   2
   ;
   Whitespace may, or may not be persisted as a token, depending on its meaningfulness
   Lexing centers on whether or not these tokens are identified as stateless or stateful
   If the tokenizer were to invoke stateful parsing rules to figure out whether a should be considered a distinct token or just part of another token
2. Parsing
   Taking a stream of tokens and turning them into an abstract tree of nested elements, representing the grammatical structure of the program
   This tree is called an “AST” (Abstract Syntax Tree)
   Consider var a = 2;
   The tree starts with a top-level node called VariableDeclaration, with a child node called Identifier (whose value is a)
   Another child called AssignmentExpression which itself has a child called NumericLiteral (whose value is 2)
3. Code-Generation
   The process of taking the AST and transforming it into executable machine code
   It also includes reserving memory and then storing variables’ values in the V8 engine
   In the process of parsing and code-generation, there are certainly steps to optimize the performance of the executing, including collapsing redundant elements, etc.

JS engines don’t have plenty of time to optimize, because JS compilation doesn’t happen in a build step ahead of time, as with other languages
In many cases, JS compilation occurs microseconds (or less!) before the code is executed

In more details, the Engine and her friends (compiler ;P), go through multiple steps when executing var a = 2;
Compiler encounters var a , Compiler asks Scope to see if variable a exists for that particular scope collection
If so, Compiler ignores this declaration and moves on
If not, Compiler asks Scope to declare a new variable called a for that scope collection
Compiler then produces code for Engine to execute, to handle the a = 2 assignment
Engine asks Scope if there is a variable called a in the current scope collection
If so, Engine uses that variable
If not, Engine looks elsewhere (see Nested Scope)
After finding the variable a, it assigns the value 2
If not, Engine will yell out “ERROR!”

When the Engine is looking for the Compiled code to see if the variable a has been declared consulting in Scope, the type of look-up the Engine performs affects the outcome of the look-up
In the case of a = 2, the Engine would perform a “LHS” (left-hand-side) look-up for the variable a
The other type of look-up is “RHS” (right-hand-side) look-up
In both cases, the sides are of an assignment operation
LHS is used when the variable is on the left side of the assignment operation
LHS is simply trying to find the container itself, so that it can assign
RHS is used when the variable is on the right side of the assignment operation
RHS look-up is indistinguishable
We could think of RHS as “retrieve his/her source (value)”
Implying RHS means “go get the value of…”
LHS and RHS doesn’t literally mean left or right side of the “=” assignment operator
There are several other ways that assignments can happen
It’s better to conceptually think about it as “who’s the target of the assignment (LHS)” and “who’s the source of the assignment (RHS)”
Consider this program, which have LHS and RHS references:
function foo(a) {
console.log( a ); // 2
}

foo( 2 );

The code above is doing a LHS by way of the Compiler
The implied a = 2 happens when the value is passed as an argument to the foo(..) function
The 2 value is assigned to the parameter a
To implicitly assign to parameter a, a LHS look-up is performed
The RHS reference for the value of a is passed to console.log(..)
console.log(..) needs a reference to execute
It’s an RHS look-up for the console object
Then a property-resolution occurs to see if it has a method called log
Since the Compiler handles both, the declaration and the value definition during code-generation, there’s no processing necessary to “assign” a function value to foo
Thus, it is not really appropriate to think of a function declaration as an LHS look-up assignment in the way we’re discussing them here

The best way to think about things is that all declarations, both variables and functions, are processed first, before any part of your code is executed.

When you see `var a = 2;`, there are two statements:
var a;
Declaration is processed during the compilation phase
a = 2;
Assignment is left in place for the execution phase

Errors in Look-Up With LHS and RHS
These types of look-ups behave differently in the circumstance where the variable has not yet been declared (not found in any consulted Scope “friend”)
Consider the following program:
function foo(a) {
console.log( a + b );
b = a;
}

foo( 2 );

When RHS look-up occurs for b the first time, it will not be found in any consulted Scope
This will result in a ReferenceError
NOTE that RHS look-up error is of the type ReferenceError
If a variable is found for an RHS look-up, but you try to do something impossible with its value, then Engine throws a TypeError
If the Engine is performing an LHS look-up and arrives at the global Scope without finding it, then the global Scope will create a new variable of that name in the global Scope, and hand it back to the Engine
If “Strict Mode” is in use (added in ES5 w/different behavior levels from normal/relaxed/lazy), it disallows the automatic, implicit global variable creation
In this case, there would not be a global Scope variable found from a LHS look-up, and Engin would throw a ReferenceError
ReferenceError is Scope resolution failure
TypeError implies Scope resolution was successful, but there was an illegal/impossible action attempted against the result

Let Variable in ES6
ES6 lets you declare variables to belong to individual code blocks (pairs of { .. }) using the let keyword
Block scoping is very useful for managing your variable scopes in a more fine-grained fashion
function foo() {
var a = 1;

	if (a >= 1) {
		let b = 2;

		while (b < 5) {
			let c = b * 2;
			b++;

			console.log( a + c );
		}
	}
}

foo();
// 5 7 9

c only belongs to the while loop
b only belongs to the if statement

`let` keyword attaches the variable declaration to the scope of whatever block `{..}`. `let` implicitly hijacks any block’s scope for its variable declaration.
var foo = true;

if (foo) {
let bar = foo * 2;
bar = something( bar );
console.log( bar );
}

console.log( bar ); // ReferenceError

Using `let` to attach a variable to an existing block is implicit. Creating explicit blocks for block-scoping can address some concerns, and make it more obvious where variables are attached and not. This explicit block-scoping style is easy to achieve, and fits more naturally w/how block-scoping works in other languages:
var foo = true;

if (foo) {
{ // <-- explicit block
let bar = foo * 2;
bar = something( bar );
console.log( bar );
}
}

console.log( bar ); // ReferenceError

Creating arbitrary block for `let` to bind by simply including a `{..}` pair is valid grammar. It also makes it easier as a whole block to move around later in refactoring, without affecting the position and semantics of the enclosing if-statement.

Garbage Collection
Another reason why block-scoping is useful is to reclaim memory related to closures and garbage collection. Consider:
function process(data) {
// do something interesting
}

var someReallyBigData = { .. };

process( someReallyBigData );

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
console.log("button clicked");
}, /*capturingPhase=*/false );

Block-scoping can address this concern, making it clearer to the engine that it doesn’t need to keep `someReallyBigData` around:
function process(data) {
// do something interesting
}

// anything declared inside this block can go away after!
{
let someReallyBigData = { .. };

	process( someReallyBigData );
}

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
console.log("button clicked");
}, /*capturingPhase=*/false );

Explicit blocks for variables to locally bind to is a powerful tool to use.

`let` Loops
for (let i=0; i<10; i++) {
console.log( i );
}

console.log( i ); // ReferenceError

Not only does `let` in the for-loop header bind the `i` to the for-loop body, but it re-binds it to each iteration of the loop, making sure to re-assign the value from the end of the previous loop iteration.

Here’s another way of illustrating the per-iteration binding behavior:
{
let j;
for (j=0; j<10; j++) {
let i = j; // re-bound for each iteration!
console.log( i );
}
}

`let` declarations attach to arbitrary blocks rather than to the enclosing function’s scope (or global)
There could be times where existing code has a hidden reliance on function-scoped `var` declarations
Replacing the `var` with `let` may require additional care when refactoring code

Consider the following code to refactor:
var foo = true, baz = 10;

if (foo) {
var bar = 3;

	if (baz > bar) {
		console.log( baz );
	}

	// ...
}

This code is refactored as:
var foo = true, baz = 10;

if (foo) {
var bar = 3;

	// ...
}

if (baz > bar) {
console.log( baz );
}

BE CAREFUL when refactoring using block-scoped variables:
var foo = true, baz = 10;

if (foo) {
let bar = 3;

	if (baz > bar) { // <-- don't forget `bar` when moving!
		console.log( baz );
	}
}


`const`
ES6 introduced `const`, which also creates a block-scoped variable, but whose value is fixed (constant). Any attempt to change that value will result in an error.
var foo = true;

if (foo) {
var a = 2;
const b = 3; // block-scoped to the containing `if`

	a = 3; // just fine!
	b = 4; // error!
}

console.log( a ); // 3
console.log( b ); // ReferenceError!


Closure
Closure is a way to “remember” and continue to access a function’s scope and its variables even after the function has finished running
function makeAdder(x) {
// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	};

	return add;
}

The reference to the inner add(y) function that gets returned w/each call to the outer makeAdder(x) is able to remember whatever x value was passed into makeAdder()
Now, let’s combine the code above with the code below, as such:
function makeAdder(x) {
// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	};

	return add;
}
// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );		// 4  <-- 1 + 3
plusOne( 41 );		// 42 <-- 1 + 41

plusTen( 13 );		// 23 <-- 10 + 13

This code works as followed:
When calling makeAdder(1), we get back a reference to its inner add(..) that remembers x as 1
We call this function reference plusOne(..)
When we call makeAdder(10), we get back a reference to its inner add(..) that remembers x as 10
We call this function reference plusTen(..)
When we call plusOne(3), it adds 3 (its inner y) to the 1 (remembered by x), getting 4 as a result
When we call plusTen(13), it adds 13 (its inner y) to the 10 (remembered by x), getting 23 as a result

Modules
The most common usage of closure in JS is the module pattern. The module pattern is perhaps the most prevalent code organization pattern in all of JS; deep understanding of it should be one of your highest priorities
Modules let you define private implementation details (variables, functions) that are hidden from the outside world
Also used for public APIs that are accessible from the outside
function User(){
var username, password;
// doLogin has closure over username and password
function doLogin(user,pw) {
username = user;
password = pw;

		// do the rest of the login work
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI;
}

// create a `User` module instance
var fred = User();

fred.login( "fred", "12Battery34!" );

The User() function serves as an outer scope that holds the variables username and password, as well as the inner doLogin function
These inner details of the User module cannot be accessed from the outside world
Executing User() creates an instance of the User module with a whole new scope, and thus a whole new copy of each of the inner variable/functions
The instance is assigned to fred
publicAPI is an object with the login property/method on it, which is a reference to the doLogin() function
When publicAPI is returned from User(), it becomes the instance fred
login() has closure over doLogin(), so username and password is kept alive
When we call fred.login(..), username and password inner variables are still accessible

this Identifier
If a function has a this reference inside it, the this reference usually points to an object
But which object it points to depends on how the function was called
It is important to realize that this does not refer to the function itself
function foo() {
console.log( this.bar );
}

var bar = "global";

var obj1 = {
bar: "obj1",
foo: foo
};

var obj2 = {
bar: "obj2"
};

// --------

foo();				// "global"
obj1.foo();			// "obj1"
foo.call( obj2 );		// "obj2"
new foo();			// undefined

Four rules for how this gets set, shown in the last four lines of the snippet above
foo() ends up setting this to the global object in non-strict mode
In strict-mode, this would be undefined, and you’d get an error in accessing the bar prop, so “global” is the value found for this.bar
obj1.foo() sets this to the obj1 object
foo.call(obj2); sets this to the obj2 object
new foo() sets this to a brand new empty object

Prototypes
When you reference a property on an object, if that property doesn’t exist, JS will automatically use that object’s internal prototype reference to find another object to look for the property
Closely related to the this keyword is the object prototype mechanism, which is a look-up chain for properties, similar to how lexical scope variables are found
You could think of this almost as a fallback if the property is missing
The internal prototype reference linkage from one object to its fallback happens at the time the object is created
Use a built-in utility called Object.create(..)
var foo = {
a: 42
};

// create `bar` and link it to `foo`
var bar = Object.create( foo );

bar.b = "hello world";

bar.b;		// "hello world"
bar.a;		// 42 <-- delegated to `foo`

The a property doesn’t exist on the bar object, but because bar is prototype-linked to foo, JS automatically falls back to looking for a on the foo object, where it’s found
Use cases:
Most common way this feature is used is to try to emulate/fake a “class” mechanism with “prototypal inheritance”
A more natural way of applying prototypes is a pattern called “behavior delegation”, where you intentionally design your linked objects to be able to delegate from one to the other for parts of the needed behavior

Loops
Loops repeat a set of actions until a condition fails, in other words, repeating only while the condition holds
Each time the loop block executes, that’s called an iteration
for is used to do a repetitive task
Syntax for counter of the for loop
i = i + 1 // counts up by 1
i ++ // counts up by 1
i-- // counts down by 1
I += 3 // counts up by 3
I += -3 // counts down by 3
Be careful with infinite loops, it will crash the browser
Anatomy of a for loop
It contains 3 claues:
Initialization clause, var i = 0
Conditional test clause, i <= 9
Update clause, i = i + 1
for (var i = 0; i <= 9; i = i + 1) {
console.log( i );
}
// 0 1 2 3 4 5 6 7 8 9


// For loop
for(i = 0; i < 12; i++){
console.log("It looped 12x");
} //12 "It looped 12x"

while
Used when we don't know in advance when to stop looping
Syntax
//Remember to set your condition outside the loop!
var count = 0;

var loop = function(count){
while(count < 3){
console.log("I'm looping!");//Your code goes here!
count++;
}
};

loop(count); //3 "I'm looping!"

do...while statement
do {
console.log( "How may I help you?" );
// help the customer...
numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

switch statement
`switch` statement used as s shorthand for a series of `if..else` statements
The switch allows you to preset a number of options (called cases), then check an expression to see if it matches any of them. If there's a match, the program will perform the action for the matching case; if there's no match, it can execute a default option
When looking for a case, it is always CASE SENSITIVE
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
case 'sandwich':
console.log("Sure thing! One sandwich, coming up.");
break;
case 'soup':
console.log("Got it! Tomato's my favorite.");
break;
case 'salad':
console.log("Sounds good! How about a caesar salad?");
break;
case 'pie':
console.log("Pie's not a meal!");
break;
default:
console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

The only difference between these loops is whether the conditional is tested before the first iteration (`while`) or after the first iteration (`do..while`)
That means if the condition is initially `false`, a `while` loop will never run, but a `do..while` loop will run just once
JS can stop a loop with `break` statement to avoid a loop that would otherwise run forever
var i = 0;

// a `while..true` loop would run forever, right?
while (true) {
// stop the loop?
if ((i <= 9) === false) {
break;
}

	console.log( i );
	i = i + 1;
}
// 0 1 2 3 4 5 6 7 8 9


Console Log Function
console.log ()
This makes the system talk to the front-end, or the user
Also called "printing out"

Return Function
return
This will return a value that is computed to the console, but not printed to the user

Variables
Variable names must be valid identifiers
Identifier must start with a-z, A-Z, $, or _
It can then contain any of those characters plus the numerals 0-9
Certain names can’t be used as variables, but are OK as property names
These words are called “reserved words”, and include:
for
in
if
null
true
false
var myName
Assigning a value to a symbolic container or variable
Useful programs need to track a value as it changes over the course of the program
The value in this container can vary over time, as needed

Constants
Centralize value settings, AKA constants, is when you declare a variable with a value and intend for the value to NOT change throughout the program
Constants are usually declared at the top of the program
By convention, JS constants are:
Capitalized
HIGGS
With underscores _ between multiple words
TAX_RATE
const TAX_RATE = 0.08;	// 8% sales tax

var amount = 99.99;

amount = amount * 2;

amount = amount + (amount * TAX_RATE);

console.log( amount );				// 215.9784
console.log( amount.toFixed( 2 ) );	// "215.98"


Objects
The object type refers to a compound value where you can set properties (named locations) that each hold their own values of any type
There can be different types of objects, and below are a few examples to initialize them
General syntax
var myObject = {
key: value,
key: value,
key: value
};

This is the object Literal Notation’s syntax
var myObj = {
key1: value,
key2: value
};

To construct an object, here is the syntax
var myObj = new Object();
myObj.key1 = value;
myObj['key2'] = value;


Objects and Properties
Object properties can be accessed with dot notation (obj.a) or bracket notation (obj[“a”])
Dot notation is preferred, because it is easier to read
Bracket notation is used when there are special characters in a property name
For example, obj[“Hello World!”]
Such properties are referred to as keys when accessed via bracket notation
Make sure to add the quotations outside the key
var obj = {
a: "hello world",
b: 42
};

var b = "a";

obj[b];			// "hello world"
obj["b"];		// 42


Using objects, we can put our information[data arrays] and functions that use that info in the same place
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone(); //Calling Oxnard Montalvo at (555) 555-5555...


Object Constructors
Instead of always using boring object constructor, we can make our own constructors
This way, we can set the properties for an object right when the object is created
Instead of using the object constructor which is empty and has no properties, we can make our own constructors which have properties
To construct objects using a function constructor, see example below:
function Person(name,age) {
this.name = name;
this.age = age;
}
// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
var george = new Person("George Washington", 275);
// help us make george, whose name is "George Washington" and age is 275

console.log(george);
//VM4405:11 Person {name: "George Washington", age: 275}

Notice the keyword this
this is used to define the name and age properties to set them equal to the parameters given

Arrays
Arrays are used to store objects that holds values of any type
Arrays are not particularly in named properties/keys, but rather in numerically object type
Benefits of arrays include:
Store lists of data
Can store different data types at the same time
Are ordered so the position of each piece of data is fixed
The best and most natural approach is to use arrays for numerically positioned values and use objects for named properties
Syntax
var arrayName = ["data1", 43, true];

arr[0];			// "hello world"
arr[1];			// 42
arr[2];			// true
arr.length;		// 3

typeof arr;		// "object"

Any time the [ ] are used, this represent an array
Use zero based indexing
The data set starts counting from placement 0, 1, 2, etc.
Syntax
var arrayName = [data1, data2, data3];
for (var i = 0; i < 3; i++) {
console.log("Sentence to print" + arrayName[i]);
}


Two Dimensional Arrays
You can make a two-dimensional array by nesting arrays one layer deep, see example below:
var newArray = [[3,7,9], [2,4,6], [5,8,9]];

Or you can also have jagged arrays
var jagged = [[3,7],[2]];


Object Constructor With Predetermined Property
Custom constructors can also give a predetermined property or set of properties to any new object
function Person(name,age) {
this.name = name;
this.age = age;
this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);
/*
VM4602:10 sally's species is Homo Sapiens and she is 39
VM4602:11 holden's species is Homo Sapiens and he is 16
*/


Combine Arrays and Loops
By combining all these ideas with a for loop, you can iterate over the languages array and print out each element in turn
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(var i = 0; i < languages.length; i++){
console.log(languages[i]);
} // HTML, CSS, JavaScript, Python, Ruby


Built-In Type Methods
Math.random()
Creates a random number from 0 up to 1
For example, 0.532319123134
Make sure to capitalize the “M” in “Math”
Math.floor()
Used to round down to a whole number.
For example, Math.floor(2.523432423) = 2
Make sure to capitalize the “M” in “Math”
X.toFixed();
The `.toFixed()` function is built-in to round to the nearest decimal positions passed in the function
var amount = 99.995;

amount.toFixed(2); // 100.00

X.length can be used to measure the number of characters in a specific string
Where x is the string to measure
Returns the number of characters
See code block below:
var name = prompt("What is your name? And I'll tell you a secret about your name!");

var n = name.length;

console.log("Your name is " + n + " characters long!");

Another example using .length to count how many objects in an array
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];{
console.log(languages.length);
} //5

Another example is the built-in type toUpperCase(); method and the toFixed(); method
var a = "hello world";
var b = 3.14159;

a.length;				// 11
a.toUpperCase();		// "HELLO WORLD"
b.toFixed(4);			// "3.1416"


Primitive VS Native Object
The “how” behind being able to call the built-in type methods is happening as an object wrapper form
This object wrapper form is a String (with capital S), AKA native type
The string with lower-case s is known as primitive type
JS automatically “boxes” the value to its object wrapper counterpart (hidden under the hood)
Any type can be wrapped by its native counterpart with a capital letter
string value can be wrapped by a String object
number can be wrapped by a Number object
boolean can be wrapped by a Boolean object
For the most, primitive value forms are used, so JS takes care of the rest for you

Values and Types
There are different built-in types:
String
Number
Boolean
Null and undefined
Null is currently returned as “object” and is a known bug in JS
Undefined values can be set in several ways, including functions that return no values and usage of the void operator
Object
Symbol (new to ES6)
Only values have types in Javascript; variables are just simple containers for those values

Javascript provides a typeof operator that can examine a value and return the type
var a;
typeof a; // "undefined"

b = "hello world"
typeof b; // "string"

c = 43;
typeof c; // "number"

d = true;
typeof d; // "boolean"

e = null;
typeof e; // "object" -- weird, bug

f = undefined;
typeof f; // "undefined"

h = { i: "j" };
typeof h; // "object"


Number Data Type
isNaN
It literally means "is Not a Number"
Syntax
isNaN = (unicorns); // where unicorns is a variable that has been defined; if it has not, then...
isNaN = ("unicorns");


Coercion and Converting Data
Coercion: method to convert from one type to another, for example, if you need to print a number on the screen, you need to convert the value to a string
Explicit coercion is not a problem
var a = "42";

var b = Number( a );

a;				// "42"
b;				// 42 -- the number!

Implicit coercion IS A PROBLEM
JS sometimes kicks in and implicitly coerce values to the matching types
For example, 99.99 and “99.99” are not completely equal
JS would implicitly convert the text type to number type
99.99 === 99.99 //true
Example, when a user inputs their age as a string, but you need it to do math operations, you need to coerce it to a number
var a = "14";

var b = a * 1;	// "14" implicitly coerced to 14 here

a;				// "14"
b;				// 14 -- the number!

Static typing, AKA type enforcement, is cited as a benefit for program correctness by preventing unintended value conversions
Weak typing, AKA dynamic typing, allows a variable to hold any type of value at any time
Cited as a benefit for program flexibility by allowing a single variable to represent a value no matter what type form that value may take in the program’s logic flow
JS uses dynamic typing, so variables can hold values of any type without any type enforcement
Variables change throughout the course of the program, illustrating the primary purpose of variables:
Managing program state to track the changes to values as your program runs

Combine Functions, Loops, and Arrays
Combining Functions, Loops and Arrays to make your program more robust
Syntax
var text = "Peter piper pizza had a kid and he named him hut, pizza hut. \ He wanted to conquer the world and eventually did. Pizza Hut was no joke. He had many \ soldiers at his disposal. Ian was the only knight that could stop this tyrant. Ian could have done it so much earlier than he did, but Ian did not want to help an arrogant community that only cared about materialistic things. Ian felt sad about this.";

var myName = "Ian";

var hits = [];

for (var i = 0; i < text.length; i++) {
if (text[i] === 'I') {
for (var j = i; j < (myName.length + i); j++) {
hits.push(text[j]);
}
}
}

if (hits.length === 0) {
console.log("Your name wasn't found!");
}   else {
console.log(hits);
}

This example is a little bit incomplete, because if the text variable had another “I” in the text that didn’t match the myName variable, then it would count those as true and push them to the hits array

Async & Performance
Asynchronicity is becoming a major factor in writability and maintanibility of code
Callbacks are the primary methods of enabling asynchrony
Promises
Time-independent wrapper around a “future value” that runs the program with the intended values, whether the values are ready or not
Promises solve the inversion of control (IoC) trust loss issue by routing callbacks through a trustable and composable promise mechanism
Generators
A new mode of executing JS function
Generators have a pause-and-resume capability that enables synchronicity by processing code behind-the-scenes
This addresses the non-linear reasonability, non-local jump confusions of callbacks
This makes code look synchronized and reasonable
Combining promises and generators yields the most effective way of writing asynchronous coding pattern

Strict Mode
Strict mode tightens the rules for certain behaviors. Generally, these restrictions are seen as keeping the code to a safer and more appropriate set of guidelines
Also, adhering to strict mode makes your code more optimizable by JS’s V8 engine
Strict mode is a big win for code, and should be used for all programs
You can opt in to strict mode for an individual function, or an entire file, depending on where you put the strict mode pragam
Individual function use of strict mode
function foo() {
"use strict";

	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// this code is not strict mode

File use of strict mode
"use strict";

function foo() {
// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// this code is strict mode


Old & New
How to keep up with the new stuff, and how long do we have to wait before it’s implemented in stable browsers?
There are two main techniques you can use to “bring” the newer JS stuff to the older browsers
Polyfilling
An invented term by Remy Sharp used to refer to taking the definition of a newer feature and producing a piece of code that’s equivalent to the behavior, but is able to run in older JS environments
AKA a piece of code or plugin
Not all new features are fully polyfillable
Sometimes most of the behavior can be polyfilled, but there are still small deviations
Be really, really careful in implementing polyfills
Use vetted set of polyfills from:
ES5-Shim https://github.com/es-shims/es5-shim
ES6-Shim https://github.com/es-shims/es6-shim
Transpiling
There’s no way to polyfill new syntax that has been added to JS
The better option is to use a tool that converts your newer code into older code equivalents
This process is known as transpiling, a term of transforming + compiling
Your source code is authored in the new syntax form, but it is deployed to the browser in old syntax form
You typically insert the transpiler into your build process, similar to your code linter or your minifier
There are several important reasons you should care about transpiling
Newer syntax is more readable and maintainable
The older is convoluted
Take advantage of new browser performance optimizations
Early feedback to the JS committee (TC39)
If you use a transpiler by default, you’ll always be able to make that switch to newer syntax whenever you find it useful, rather than waiting for browsers to phase out
Some common transpilers today are:
Babel https://babeljs.io (formerly 6to5): Transpiles ES6+ into ES5
Traceur https://github.com/google/traceur-compiler: Transpiles ES6, ES7, and beyond into ES5

ES6
ES6 introduced a new way to declare constants
Constants prevent accidentally changing value somewhere else after the initial setting
Program will reject if you are trying to change a constant
In “strict-mode”, it would have failed with an error message
This type of protection is similar to the static typing type enforcement, so you can see why static types in other languages can be attractive

Non-Javascript
The most common non-JS JS you’ll encounter is the DOM API, for example:
var el = document.getElementById( "foo" );

getElementByID(..) method on document looks like a normal JS function, but it’s just a thinly exposed interface to a built-in method provided by the DOM from the browser
In some newer gen browsers, this layer may be in JS, but traditionally, the DOM and its behavior is implemented in something like C/C++
alert(..) is a pop up message box provided to your JS program by the browser, not the JS engine
The call you make sends the message to the browser internals and it handles drawing and displaying the message box
console.log(..) is provided by the browser and hooks them up to the developer tools
