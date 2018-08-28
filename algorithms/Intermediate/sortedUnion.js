// Intermediate Algorithm Scripting: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// Check the assertion tests for examples.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// BASE CODE
// function uniteUnique(arr) {
//   return arr;
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// TEST CODE
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])// should return [1, 2, 3, 5, 4, 6, 7, 8].

// PRECODE
// 1. Compare value of first array to each inputted array
// 2. If it does not exist push the value; 

function uniteUnique(arr) {
	let holder = [];
	for (var i = 0; i < arguments.length; i++) { //loops through the arguments/arrays
		let current = arguments[i]
		// console.log(current)

		for (var j = 0; j < arguments[i].length; j++) { //loops through each array to see if the value exists in the holder array

			if (holder.indexOf(arguments[i][j]) === -1) { //checks to see if the array contains the index or not
				holder.push(arguments[i][j])  //pushes the value to array if -1 index is returned
			}

		}
	}
	
	console.log(holder)
  	return holder
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].


// BASIC SOLUTION
// function uniteUnique(arr1, arr2, arr3) {
//   // Creates an empty array to store our final result.
//   var finalArray = [];

//   // Loop through the arguments object to truly made the program work with two or more arrays
//   // instead of 3.
//   for (var i = 0; i < arguments.length; i++) {
//     var arrayArguments = arguments[i];

//     // Loops through the array at hand
//     for (var j = 0; j < arrayArguments.length; j++) {
//       var indexValue = arrayArguments[j];

//       // Checks if the value is already on the final array.
//       if (finalArray.indexOf(indexValue) < 0) {
//         finalArray.push(indexValue);
//       }
//     }
//   }

//   return finalArray;
// }

// INTERMEDIATE SOLUTION
// function uniteUnique(arr1, arr2, arr3) {
//  var newArr;
//  //Convert the arguments object into an array
//   var args = Array.prototype.slice.call(arguments);
//   //Use reduce function to flatten the array
//   newArr = args.reduce(function(arrA,arrB){
//   //Apply filter to remove the duplicate elements in the array
//     return arrA.concat(arrB.filter(function(i){
//       return arrA.indexOf(i) === -1;
//     }));
//   });

//    return newArr;                    
// }


// ADVANCED SOLUTION
// function uniteUnique() {
//   var concatArr = [];
//   var i = 0;
//   while (arguments[i]){
//     concatArr = concatArr.concat(arguments[i]); i++;
//   }
//   uniqueArray = concatArr.filter(function(item, pos) {
//     return concatArr.indexOf(item) == pos;
//   });
//   return uniqueArray;
// }
