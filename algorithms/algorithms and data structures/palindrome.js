// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.


// BASE CODE
// function palindrome(str) {
//   // Good luck!
//   return true;
// }

// palindrome("eye");

// TEST CODE
// palindrome("eye") //should return a boolean.
// palindrome("eye") //should return true.
// palindrome("_eye") //should return true.
// palindrome("race car") //should return true.
// palindrome("not a palindrome") //should return false.
// palindrome("A man, a plan, a canal. Panama") //should return true.
// palindrome("never odd or even")// should return true.
// palindrome("nope") //should return false.
// palindrome("almostomla")// should return false.
// palindrome("My age is 0, 0 si ega ym.") //should return true.
// palindrome("1 eye for of 1 eye.")// should return false.
// palindrome("0_0 (: /-\ :) 0-0")// should return true.
// palindrome("five|\_/|four") //should return false

// Precode
// 1. Use regex to remove all punctuation, spaces, and symbols
// 2. Turn remaining letters into lower case
// 3. Iterate through the string starting at [0] and stop at half way (string.length/2)
// 4. Iterate through the string, starting at the end [-1] (string.length/2)


function palindrome(str) {
	let regex = /[^0-9a-zA-Z]/g //keeps only the letters and numbers
	// str = str.replace(regex, '');
	// console.log(str);
	// str = str.toLowerCase();
	// str = str.split('');
	
	str = str.replace(regex, '').toLowerCase().split('') // regex is used to remove the extra spaces from string; turns all to lower case; turns the string to an array
	// console.log(str);
	// console.log(str.reverse())

	if (str.join() === str.reverse().join()) { //we need an array to use the reverse() method and to rejoin it to compare the strings
		console.log(true)
		return true
	} else {
		console.log(false)
		return false
	}
}

palindrome("eye") //should return true.
palindrome("_eye") //should return true.
palindrome("race car") //should return true.
palindrome("not a palindrome") //should return false.
palindrome("A man, a plan, a canal. Panama") //should return true.
palindrome("never odd or even")// should return true.
palindrome("nope") //should return false.
palindrome("almostomla")// should return false.
palindrome("My age is 0, 0 si ega ym.") //should return true.
palindrome("1 eye for of 1 eye.")// should return false.
palindrome("0_0 (: /-\ :) 0-0")// should return true.
palindrome("five|\_/|four") //should return false



// BASIC SOLUTION
// function palindrome(str) {
//   return str.replace(/[\W_]/g, '').toLowerCase() ===
//          str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
// }

// INTEMEDIATE SOLUTION
// function palindrome(str) {
//   str = str.toLowerCase().replace(/[\W_]/g, '');
//   for(var i = 0, len = str.length - 1; i < len/2; i++) {
//     if(str[i] !== str[len-i]) {
//       return false;
//     }
//   }
//   return true;
// }

// ADVANCED SOLUTION
// //this solution performs at minimum 7x better, at maximum infinitely better.
// //read the explanation for the reason why. I just failed this in an interview.
// function palindrome(str) {
//   //assign a front and a back pointer
//   let front = 0
//   let back = str.length - 1

//   //back and front pointers won't always meet in the middle, so use (back > front)
//   while (back > front) {
//     //increments front pointer if current character doesn't meet criteria
//     if ( str[front].match(/[\W_]/) ) {
//       front++
//       continue
//     }
//     //decrements back pointer if current character doesn't meet criteria
//     if ( str[back].match(/[\W_]/) ) {
//       back--
//       continue
//     }
//     //finally does the comparison on the current character
//     if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
//     front++
//     back--
//   }

//   //if the whole string has been compared without returning false, it's a palindrome!
//   return true

// }