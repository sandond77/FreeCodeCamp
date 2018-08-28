// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// BASE CODE
// function fearNotLetter(str) {
//   return str;
// }

// fearNotLetter("abce");

// TEST CODE
// fearNotLetter("abce") //should return "d".
// fearNotLetter("abcdefghjklmno")// should return "i".
// fearNotLetter("stvwx")// should return "u".
// fearNotLetter("bcdf") //should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.

// PRECODE
// 1. Use string.charCodeAt() to see if the next unicode value exists or not 
// 2. Use string.fromCharCode() to return the unicode
// 3. If nothing is spliced in, return undefined. 



function fearNotLetter(str) {
	for (var i = 0; i < str.length; i++) {
		let currentLetter = str.charCodeAt(i);
		
		// console.log(currentLetter, str.charCodeAt(0)+i) //this will compare the hexcode value 
	
		if (currentLetter !== str.charCodeAt(0)+i) { //this will compare the hexcode value, if the hexcode of the current one does not equal it will return the letter
			console.log(String.fromCharCode(currentLetter - 1))
			return (String.fromCharCode(currentLetter - 1))
		}
	}

  	return undefined;
}

fearNotLetter("abce") //should return "d".
fearNotLetter("abcdefghjklmno")// should return "i".
fearNotLetter("stvwx")// should return "u".
fearNotLetter("bcdf") //should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.


// BASIC SOLUTION
// function fearNotLetter(str) {

//   for(var i = 0; i < str.length; i++) {
//     /* code of current character */
//     var code = str.charCodeAt(i);

//     /* if code of current character is not equal to first character + no of iteration
//     hence character has been escaped */
//     if (code !== str.charCodeAt(0) + i) {

//       /* if current character has escaped one character find previous char and return */
//       return String.fromCharCode(code - 1);
//     }  
//   }
//   return undefined;
// }

// fearNotLetter("abce");

// INTERMEDIATE SOLUTION
// // Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// // See the explanation for reference as to why. It's worth the effort.

// function fearNotLetter(str) {
//   var compare = str.charCodeAt(0), missing;

//   str.split('').map(function(letter,index) {
//     if (str.charCodeAt(index) == compare) {
//       ++compare;
//     } else {
//       missing = String.fromCharCode(compare);
//     }
//   });

//   return missing;
// }

// // test here
// fearNotLetter("abce");

// ADVANCED SOLUTION
// function fearNotLetter(str) {
//   for (let i = 1; i < str.length; ++i) {
//     if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
//       return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//     }
//   }
// }