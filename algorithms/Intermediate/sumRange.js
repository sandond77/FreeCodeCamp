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