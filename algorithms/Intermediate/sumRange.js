// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE 
// function sumAll(arr) {
// 	return 1;
//   }
  
// sumAll([1, 4]);

// TEST CASES
// sumAll([1, 4]) //should return 10.
// sumAll([4, 1]) //should return 10.
// sumAll([5, 10]) //should return 45.
// sumAll([10, 5]) //should return 45.


// MY SOLUTION
function sumAll(arr) {
	let min = Math.min(arr[0],arr[1]);
	let max = Math.max(arr[0],arr[1]);
	let sum = 0;
	for(let i=min; i <= max; i++){
		sum += i
	}
	console.log(sum)
  return sum;
}

sumAll([1, 4]) //should return 10.
sumAll([4, 1]) //should return 10.
sumAll([5, 10]) //should return 45.
sumAll([10, 5]) //should return 45.


// GIVEN SOLUTION #1
// function sumAll(arr) {
//     var max = Math.max(arr[0], arr[1]);
//     var min = Math.min(arr[0], arr[1]);
//     var temp = 0;
//     for (var i=min; i <= max; i++){
//         temp += i;
//     }
//   return(temp);
// }

// GIVEN SOLUTION #2
// function sumAll(arr) {
// 	// Buckle up everything to one!
  
// 	// Using ES6 arrow function (one-liner)
// 	var sortedArr = arr.sort((a,b) => a-b);
// 	var firstNum = arr[0];
// 	var lastNum = arr[1];
// 	// Using Arithmetic Progression summing formula
  
// 	var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
// 	return sum;
//   }

// GIVEN SOLUTION #3
// function sumAll(arr) {
//     var sum = 0;
//     for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
//         sum += i;
//     }
//   return sum;
// }
