// Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// BASE CODE
// function smallestCommons(arr) {
//   return arr;
// }


// smallestCommons([1,5]);

// TEST CODE
// smallestCommons([1, 5])  //should return a number.
// smallestCommons([1, 5])  //should return 60.
// smallestCommons([5, 1]) // should return 60.
// smallestCommons([2, 10]) // should return 2520.
// smallestCommons([1, 13])  //should return 360360.
// smallestCommons([23, 18]) //should return 6056820.


PRECODE 
1. Sort array from largest to smallest value
2. Create a new array that contains the values in between the number range provided
3.

function smallestCommons(arr) {
  	return arr;
}


smallestCommons([1,5]);