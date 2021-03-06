// Intermediate Algorithm Scripting: Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function dropElements(arr, func) {
//   // Drop them elements.
//   return arr;
// }

// dropElements([1, 2, 3], function(n) {return n < 3; });

// TEST CODE
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) //should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) //should return [1, 0, 1].
// dropElements([1, 2, 3], function(n) {return n > 0;}) //should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //should return [].
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})// should return [7, 4].
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) //should return [3, 9, 2].

function dropElements(arr, func) {
  // Drop them elements.
	let length = arr.length; //need this variable to set the array length to its original value otherwise it will be too short with arr.length
	  	for (let i = 0; i < length; i++){ //for the ORIGINAL length of the array we will run the loop; 
			// console.log(length, func(arr[0]));
	  	if (!func(arr[0])){ //if the callback is false, the first element of the array will be removed
			arr.shift();
	  	}
  	}
  	console.log(arr)
  	return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) //should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) //should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) //should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})// should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) //should return [3, 9, 2].



// BASIC SOLUTION 
// function dropElements(arr, func) {
// 	// drop them elements.
// 	var times = arr.length;
// 	for (var i = 0; i < times; i++) {
// 	  if (func(arr[0])) {
// 		break;
// 	  } else {
// 		arr.shift();
// 	  }
// 	}
// 	return arr;
// }

// INTERMEDIATE SOLUTION
// function dropElements(arr, func) {
// 	return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
// }

// ADVANCED SOLUTION
// function dropElements(arr, func) {
// 	while(arr.length > 0 && !func(arr[0])) {
// 	  arr.shift();
// 	}
// 	return arr;
// }