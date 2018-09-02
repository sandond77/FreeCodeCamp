// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write yourown code.


// BASE CODE
// function truthCheck(collection, pre) {
//   // Is everyone being true?
//   return pre;
// }

// TEST CODE
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") s //hould return true.
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")  //should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")  //should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")  //should return false
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")  //should return true
// truthCheck([{"single": "yes"}], "single")  //should return true
// truthCheck([{"single": ""}, {"single": "double"}], "single")  //should return false
// truthCheck([{"single": "double"}, {"single": undefined}], "single")  //should return false
// truthCheck([{"single": "double"}, {"single": NaN}], "single")  //should return false

// My Solution
function truthCheck(collection, pre) { 
	let status = true;

	for (var i = 0; i < collection.length; i++) { //for the length of the object
		// console.log(collection[i][pre]) 
		if (!collection[i][pre]) { //checking to see if the object's property contains a truthy value or not 
			status = false
		}
	}

	console.log(status)
  // Is everyone being true?
  return status;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")  //should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")  //should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")  //should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")  //should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")  //should return true
truthCheck([{"single": "yes"}], "single")  //should return true
truthCheck([{"single": ""}, {"single": "double"}], "single")  //should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single")  //should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single")  //should return false


// BASIC SOLUTION
// function truthCheck(collection, pre) {
//   // Create a counter to check how many are true.
//   var counter = 0;
//   // Check for each object
//   for (var c in collection) {
//     // If it is has property and value is truthy
//     if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
//       counter++;
//     }
//   }
//   // Outside the loop, check to see if we got true for all of them and return true or false
//   return counter == collection.length;
// }


// INTERMEDIATE SOLUTION
// function truthCheck(collection, pre) {
//   return collection.every(function (element) {
//     return element.hasOwnProperty(pre) && Boolean(element[pre]);
//   });
// }

// ADVANCED SOLUTION
// function truthCheck(collection, pre) {
//   // Is everyone being true?
//   return collection.every(obj => obj[pre]);
// }