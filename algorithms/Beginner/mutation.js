// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.


// BASE CODE
// function mutation(arr) {
//   return arr;
// }

// mutation(["hello", "hey"]);


// TEST CODE
// mutation(["hello", "hey"])  //should return false.
// mutation(["hello", "Hello"])  //should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])  //should return true.
// mutation(["Mary", "Army"])  //should return true.
// mutation(["Mary", "Aarmy"])  //should return true.
// mutation(["Alien", "line"])  //should return true.
// mutation(["floor", "for"])  //should return true.
// mutation(["hello", "neo"]) // should return false.
// mutation(["voodoo", "no"])  //should return false.



function mutation(arr) {
	let string1 = arr[0].toLowerCase().split("");
	let string2 = arr[1].toLowerCase().split("");

	for (let i=0; i < string2.length; i++){
		if (string1.indexOf(string2[i]) === -1 ){
			console.log(false)
			return false
		}
	}

	console.log(true)
	return true
}

mutation(["hello", "hey"])  //should return false.
mutation(["hello", "Hello"])  //should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])  //should return true.
mutation(["Mary", "Army"])  //should return true.
mutation(["Mary", "Aarmy"])  //should return true.
mutation(["Alien", "line"])  //should return true.
mutation(["floor", "for"])  //should return true.
mutation(["hello", "neo"]) // should return false.
mutation(["voodoo", "no"])  //should return false.


// SOLUTION #1
// function mutation(arr) {
// 	var test = arr[1].toLowerCase();
// 	var target = arr[0].toLowerCase();
// 	for (var i=0;i<test.length;i++) {
// 	  if (target.indexOf(test[i]) < 0)
// 		return false;
// 	}
// 	return true;
// }

// SOLUTION #2
// function mutation(arr) {
// 	return arr[1].toLowerCase()
// 	  .split('')
// 	  .every(function(letter) {
// 		return arr[0].toLowerCase()
// 		  .indexOf(letter) != -1;
// 	  });
// }