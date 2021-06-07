// Friends List Practice
// This is an example to search for a friend in your friends object array
let friends = {};
friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(408) 555-5555",
    address: ['1 Infinite Loop','Cupertino','CA','95014']
};

let search = function(name) {
    for(let prop in friends) {
        if(friends[prop].firstName === name) {
            console.log(friends[prop]);
        }
    }
};

search("Steve");
// {firstName: "Bill", lastName: "Gates", number: "(206) 555-5555", address: Array(4)}


// To list all of your objects in the friends array, see example below
let list = function(obj) {
    for(let prop in obj) {
        console.log(prop);
    }
};

list(friends);
/*
bill
steve
*/

search("Steve");
/*
bill
steve
{firstName: "Steve", lastName: "Jobs", number: "(408) 555-5555", address: Array(4)}
*/


