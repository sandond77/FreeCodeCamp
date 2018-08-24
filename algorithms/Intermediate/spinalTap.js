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