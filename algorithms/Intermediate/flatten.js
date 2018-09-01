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

steamrollArray([1, [2], [3, [[4]]]]);