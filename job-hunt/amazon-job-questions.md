# Amazon Job Questions

## Practice Question

```js
// AMCAT ID: 23280666261102

// Total sum of multiples
var sumOfMultiples = 0

const multiplesOf3and5 = (limit)=>{
    // Loop through the number limit
    for (var i = 1; i < limit; i++) {
        // Conditionals to find if multiples of 3 or 5, or both, if so, then sum it
        if((i % 3 === 0) || (i % 5 === 0)|| (i % 3 === 0 && i % 5 === 0)){
            sumOfMultiples = sumOfMultiples + i
        }
    }
    return sumOfMultiples
}

multiplesOf3and5(10)
console.log(sumOfMultiples)
```

## Question One

```js
// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
let numOfParts = 4
let parts = [20, 4, 8, 2]

function minimumTime(numOfParts, parts) {
    // WRITE YOUR CODE HERE
    // Establish timeRequired as int
    var timeRequired = 0
    // Loop through the parts sizes to determine time
    for (var i = 0; i < parts.length; i++) {
        // Based on size add time required
        // sizes between 4 and 6 get an estimated time of 10
        if (parts[i] >= 1 && parts[i] <= 6) {
            timeRequired += 10
        } else if (parts[i] >= 7 && parts[i] <= 10) {
            timeRequired += 18
        } else if (parts[i] >= 11 && parts[i] <= 18) {
            timeRequired += 30
        } else {
            timeRequired += 16
        }
    }
    console.log(timeRequired)
}
// FUNCTION SIGNATURE ENDS
minimumTime(numOfParts, parts)
```


## Question Two

```js
// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
// var numColumns = 5
// var numRows = 4
// var area = [[1,1,1,1],
//     [0,1,1,1],
//     [0,1,0,1],
//     [1,1,9,1],
//     [0,0,1,1]
// ]
var numColumns = 3
var numRows = 3
var area = [
    [1,0,0],
    [1,0,0],
    [1,9,1]
]
function minimumDistance(numRows, numColumns, area) {
    // WRITE YOUR CODE HERE
    // Plan a route for delivery and output min distance REQUIRED
    // inaccessible roads = 0
    // accessible roads = 1
    // order destination = 9
    // In grid, check for order destination
    // Add to queue the delivery start point from top-left corner in grid
    var queue = [(0, 0)]
    // Establish distanceRequired
    var distanceRequired = 0
    // Loop through area to dig deep into each column's item
    for(var i = 0; i < area.length; i++){
        // Loop through column to find order destination
        for(var j = 0; j < area[i].length; j++){
            if(area[i][j] === 9){
                distanceRequired = 0
            } else {
                distanceRequired += 1
            }
        }
    }
    console.log(distanceRequired);
}
minimumDistance(numRows,numColumns,area)
// FUNCTION SIGNATURE ENDS
```
