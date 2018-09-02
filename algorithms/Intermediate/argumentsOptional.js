// Intermediate Algorithm Scripting: Arguments Optional

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function addTogether() {
//   return false;
// }

// addTogether(2,3);

// TEST CODE
// addTogether(2, 3) //should return 5.
// addTogether(2)(3) //should return 5.
// addTogether("http://bit.ly/IqT6zt") //should return undefined.
// addTogether(2, "3") //should return undefined.
// addTogether(2)([3]) //should return undefined.

// PRECODE
// 1. Check for existence of arguments
// 2. If there is a 2nd argument, complete the arithmatic
// 3. If there isn't a 2nd argument, return the first argument

function addTogether() {
  return false;
}

addTogether(2,3);