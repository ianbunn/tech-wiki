// Fizz Buzz Game Practice
// We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz".
// If the number is divisible by 5 we're going to print "Buzz".
// What will we print if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!
for(let i = 1; i < 21; i++) {

    if(i % 3 === 0){
        if(i % 5 === 0){
            console.log("FizzBuzz");
        }
        else{
            console.log("Fizz");
        }
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz

