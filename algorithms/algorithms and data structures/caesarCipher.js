// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function rot13(str) { // LBH QVQ VG!
  
//   return str;
// }

// // Change the inputs below to test
// rot13("SERR PBQR PNZC");

// TEST CODE
// rot13("SERR PBQR PNZC") //should decode to FREE CODE CAMP
// rot13("SERR CVMMN!") //should decode to FREE PIZZA!
// rot13("SERR YBIR?") //should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// PreCode
// 1. Create an array of alphabet letters
// 2. Iterate through string to match letter with alphabet arrays index
// 3. Add a value of 13 to the letter's corresponding index.
// 4. If its greater than 26, subtract 26 from the index and return the letter.

// ATTEMPT #1 (broken)
function rot13(str) { // LBH QVQ VG!
  	let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	let holder = [];

  	for (var i = 0; i < str.length; i++) {

  		for (var j = 0; i < alphabet.length; j++) {
  			console.log(str[i] === alphabet[j])
	  		if (str[i] === alphabet[j]) {
	  			let index = j + 13
				if (index > 26) {
					holder.push(alphabet[j-26]);
					console.log(holder)
				} else {
					holder.push(alphabet[j])
					console.log(holder)
				}
	  		}
  		}
  	}
  	return holder;
}


// Attempt #2
function rot13(str) { // LBH QVQ VG!
  
 	 return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC") //should decode to FREE CODE CAMP