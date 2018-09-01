// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function steamrollArray(arr) {
//   // I'm a steamroller, baby
//   return arr;
// }

// steamrollArray([1, [2], [3, [[4]]]]);


// TEST CODE
// steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].

// PRECODE
// 1. Use a loop to get into the nested array
// 2. Push nested element into a new array

// BASE CODE
// function steamrollArray(arr) {
//   // I'm a steamroller, baby
// 	console.log(typeof (arr[1]))
// 	let holder = [];
// 	let push = '';
	
// 	for (let i=0; i < arr.length; i++){
// 		console.log(Array.isArray(arr[i]));
// 		while (Array.isArray(arr[i])){
// 			push = arr[i].slice(i)
// 		}
// 		console.log("push",push);
// 	}
//   	return arr;
// }

// steamrollArray([1, [2], [3, [[4]]]]);

// BASIC SOLUTION
// function steamrollArray(arr) {
// 	var flattenedArray = [];
  
// 	// Create function that adds an element if it is not an array.
// 	// If it is an array, then loops through it and uses recursion on that array.
// 	var flatten = function(arg) {
// 	  if (!Array.isArray(arg)) {
// 		flattenedArray.push(arg);
// 	  } else {
// 		for (var a in arg) {
// 		  flatten(arg[a]);
// 		}
// 	  }
// 	};
  
// 	// Call the function for each element in the array
// 	arr.forEach(flatten);
// 	return flattenedArray;
//   }
  
//   // test here
//   steamrollArray([1, [2], [3, [[4]]]]);

// IMMEDIATE SOLUTION
// function steamrollArray(arr) {
// 	let flat = [].concat(...arr);
// 	return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
//   }
  
//   flattenArray([1, [2], [3, [[4]]]]);

// ADVANCED SOLUTION
// function steamrollArray(arr) {
// 	return arr.toString()
// 	  .replace(',,', ',')       // "1,2,,3" => "1,2,3"
// 	  .split(',')               // ['1','2','3']
// 	  .map(function(v) {
// 		if (v == '[object Object]') { // bring back empty objects
// 		  return {};
// 		} else if (isNaN(v)) {        // if not a number (string)
// 		  return v;
// 		} else {
// 		  return parseInt(v);         // if a number in a string, convert it
// 		}
// 	  });
// }