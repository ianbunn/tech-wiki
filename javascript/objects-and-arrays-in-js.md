# Objects & Arrays From Google Drive Notes

This means that just as we can make arrays of numbers and strings, we can also make arrays of objects.
// Our person constructor
function Person (name, age) {
this.name = name;
this.age = age;
}


// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
// add the last family member, "timmy", who is 6 years old
Using Loops in Arrays of Objects
Arrays filled with objects will work just like arrays filled with numbers and strings

In the same way we may loop through an array of numbers to print them out or calculate a sum, we can loop through an array of objects and access properties or methods.
// Our Person constructor
function Person (name, age) {
this.name = name;
this.age = age;
};


// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
// loop through our new array
for (var i in family) {
console.log(family[i].name);
}
Passing Objects into Functions
In addition to making arrays of objects, we can use objects as parameters for functions as well.

That way, these functions can take advantage of the methods and properties that a certain object type provides.
// Our person constructor
function Person (name, age) {
this.name = name;
this.age = age;
}


// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
return person1.age - person2.age;
}


var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);


// get the difference in age between alice and billy using our function
var diff = ageDifference(alice,billy);


How to Establish Properties for an Object
Each piece of info we include in an object is known as a property.
Think of a property like a category label that belongs to the object.
When we have more than one property, they are separated by a comma.
The last property does NOT end with a comma.
How to Access Properties
Dot notation is used to access a property by using ObjectName.PropertyName (e.g., ian.name).
Bracket notation is used by typing ObjectName["PropertyName"]
Note that you need " " to access the desired property.
Creating Objects Using Constructor
Object literal notation - that is, creating a new object with {} and defining properties withing the brackets.
var susan1 = {
name: "Susan Jordan",
age: 24
};
Using a constructor by using the word new before the word object will create an empty object.
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
What are Methods?
Methods are an important part of object oriented programming (OOP).
Methods are similar to functions.
Function refresher
Functions are defined using the function keyword followed by:
A pair of parentheses () with optional parameters inside.
A pari of curly braces {} with the function's code inside.
A semicolon ; .
When we call a function, we can put inputs (arguments) for the parameters.
var multiply = function (x,y) {
return x * y;
};


multiply(2,1);
A method is just like a function associated with an object.
// here is bob again, with his usual properties
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(20);
// bob's feeling old.  Use our method to set bob's age to 20
Why are Methods Important?
They can be used to change object property values.
They can be used to make calculations based on object properties.
Functions can only use parameters as an input, but methods can make calculations with object properties.
var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
bob.age = newAge;
};


bob.getYearOfBirth = function () {
return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());
"This" Placeholder in Methods
This is used as a placeholder and will refer to whichever object called that method when the method is actually used.
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;

// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 30;
susan.setAge = setAge;
// here, update Susan's age to 35 using the method
susan.setAge(35);
Another Method to use This
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth){
this.width = newWidth;
};



// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);
Another Method to use This
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function(){
return this.sideLength * this.sideLength;
};


var p = square.calcPerimeter();
var a = square.calcArea();

