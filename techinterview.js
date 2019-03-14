// function fib(n) {
//     if(n < 2) {
//         return n
//     }
//     return fib(n - 1) + fib (n + 2)
// }

// fib(10);

// var recursive = function (n) {
//     if (n <= 2) {
//         return 1;
//     } else {
//         return this.recursive(n - 1) + this.recursive(n - 2);
//     }
// };

// recursive(4) + recursive(4);

var fib = (n)=> {
    // find if x is equal to 1 to find the 0
    if (n === 1) {
        return [0, 1];
    }
    // if not run function minus 1
    else {
        // run this function again to run a lesser number and then...
        var s = fib(n - 1);
        // compare previous numbers
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fib(15));