// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// BASE CODE
// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor
//   return str;
// }


// Test Cases
// confirmEnding("Bastian", "n") //should return true.
// confirmEnding("Congratulation", "on")// should return true.
// confirmEnding("Connor", "n")// should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") //should return false.
// confirmEnding("He has to give me a new name", "name") //should return true.
// confirmEnding("Open sesame", "same")// should return true.
// confirmEnding("Open sesame", "pen") //should return false.
// confirmEnding("Open sesame", "game") //should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") //should return false.
// confirmEnding("Abstraction", "action") //should return true.


function confirmEnding(str, target) {
	if (str.substr(-target.length) === target){	//adding the negative will start the search from opposite end
		// console.log('\n' + str.substr(-target.length)) 
		// console.log(target)
		// console.log(typeof str.substr(-target.length))
		return console.log(true);
	} else {
		// console.log('\n' + str.substr(-target.length))
		return console.log(false);
	}
}

// Solution #1
// function confirmEnding(string, target) {
//   if (string.substr(-target.length) === target) {
//     return true;
//   } else {
//     return false;
//   }
// }
// confirmEnding('Bastian', 'n');


// Solution #2
// function confirmEnding(string, target) {
//   return (string.substr(-target.length) === target) ? true : false;
// }
// confirmEnding('Bastian', 'n');