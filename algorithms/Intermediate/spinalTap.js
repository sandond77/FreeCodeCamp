// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function spinalCase(str) {
// // "It's such a fine line between stupid, and clever."
// // --David St. Hubbins
// return str;
// }

// spinalCase('This Is Spinal Tap');

// TEST CODE
// spinalCase("This Is Spinal Tap") //should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh")// should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") //should return "all-the-small-things".

function spinalCase(str) {
	//https://regexr.com/ to generate regex
	//Regex will create an array, seperated by where is a space/capital letter/underscore
	//Join will merge the array together into a string with the dash and toLowerCase() converts all to lower case
	str = str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase(); 
	console.log(str)
	return str;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh")// should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") //should return "all-the-small-things".


// GIVEN SOLUTION #1
// function spinalCase(str) {
//   // Create a variable for the white space and underscores.
//   var regex = /\s+|_+/g;

//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

//   // Replace space and underscore with -
//   return str.replace(regex, '-').toLowerCase();
// }

// GIVEN SOLUTION #2
// function spinalCase(str) {
//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
//   // Split on whitespace and underscores and join with dash
//   return str.toLowerCase().split(/(?:_| )+/) .join('-');
// }

// GIVEN SOLUTION #3
// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins

//   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
// }