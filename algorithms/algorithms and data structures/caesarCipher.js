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
// function rot13(str) { // LBH QVQ VG!
//   	let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// 	let holder = [];

//   	for (var i = 0; i < str.length; i++) {

//   		for (var j = 0; i < alphabet.length; j++) {
//   			console.log(str[i] === alphabet[j])
// 	  		if (str[i] === alphabet[j]) {
// 	  			let index = j + 13
// 				if (index > 26) {
// 					holder.push(alphabet[j-26]);
// 					console.log(holder)
// 				} else {
// 					holder.push(alphabet[j])
// 					console.log(holder)
// 				}
// 	  		}
//   		}
//   	}
//   	return holder;
// }


// // Attempt #2 (Cant figure out how to add space to string)
// function rot13(str) { // LBH QVQ VG!
//   	let regex = /[A-Z]/;
//   	let holder = [];

//   	for (var i = 0; i < str.length; i++) {
//   		if (regex.test(str[i])) {
//   			holder.push(str[i].charCodeAt() + 13)
//   		}
//   	}

//   	for (var i = 0; i < holder.length; i++) {
//   		if (holder[i] >= 90) {	//90 is the ascii code for Z
// 			holder[i] = ((holder[i] - 65) % 26) + 65 //65 is the ascii code for A. if we add the remainder, we will get our shifted letter
//   		}
//   		holder[i] = String.fromCharCode(holder[i])
//   	}
//   	holder = holder.join(" ");
// 	console.log(holder)
//  	return str;
// }

// // Change the inputs below to test
// rot13("SERR PBQR PNZC") //should decode to FREE CODE CAMP


// Attempt #3 	//using regex and replace only?
function rot13(str) { // LBH QVQ VG!
  	let regex = /[A-Z]/g ; //declares our regex to look for capital letters from A-Z
	  	str = str.replace(regex, (str) => {
			str = ((str.charCodeAt() - 65 + 13) % 26) + 65; //+13 for our shift. Then we find our remainder by subtracting 65 and modulus 26. THenn add 65 back to get to our ascii codes for capital letters
			console.log(str)
			return String.fromCharCode(str); //we need this return so that the replace() method can use the function output
		});

  	console.log(str);
  	return str;
}

rot13("SERR PBQR PNZC") //should decode to FREE CODE CAMP



GIVEN SOLUTION #1
function rot13(str) {
	// Split str into a character array
	return str.split('')
	// Iterate over each character in the array
	  .map.call(str, function(char) {
		// Convert char to a character code
		x = char.charCodeAt(0);
		// Checks if character lies between A-Z
		if (x < 65 || x > 90) {
		  return String.fromCharCode(x);  // Return un-converted character
		}
		//N = ASCII 78, if the character code is less than 78, shift forward 13 places
		else if (x < 78) {
		  return String.fromCharCode(x + 13);
		}
		// Otherwise shift the character 13 places backward
		return String.fromCharCode(x - 13);
	  }).join('');  // Rejoin the array into a string
}

// GIVEN SOLUTION #2
// function rot13(str) {
// 	var rotCharArray = [];
// 	var regEx = /[A-Z]/ ;
// 	str = str.split("");
// 	for (var x in str) {
// 	  if (regEx.test(str[x])) {
// 		// A more general approach
// 		// possible because of modular arithmetic
// 		// and cyclic nature of rot13 transform
// 		rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
// 	  } else {
// 		rotCharArray.push(str[x].charCodeAt());
// 	  }
// 	}
// 	str = String.fromCharCode.apply(String, rotCharArray);
// 	return str;
// }


// GIVEN SOLUTION #3
// function rot13(str) { // LBH QVQ VG!
// 	return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
// }