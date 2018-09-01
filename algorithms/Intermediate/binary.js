// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// BASE CODE
// function binaryAgent(str) {
//   return str;
// }

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// TEST CODE
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") //should return "Aren't bonfires fun!?"
// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") //should return "I love FreeCodeCamp!"

// PRECODE 
// 1. Split String into array array.split()
// 2. Turn binary into uninumber using parseInt() w/ base 2
// 3. Turn uninumber into the corresponding letter w/ string.fromCharCode()
// 4. Join array back into string and return solution

// MY SOLUTION
function binaryAgent(str) {
	str = str.split(' '); //splits the string to a new array
	
	for (let i=0; i < str.length; i++){ //for loop runs length array
		str[i] = parseInt(str[i], 2) //turns our binary into a unicode using parseInt w/ a base 2 
		str[i] = String.fromCharCode(str[i]); //turns each unicode into the corresponding letter
	}

	str = str.join('') //rejoins the letters in the array abck into a string 
	return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


// BASIC SOLUTION
// function binaryAgent(str) {
// 	biString = str.split(' ');
// 	uniString = [];

//   /*using the radix (or base) parameter in parseInt, we can convert the binary
// 	number to a decimal number while simultaneously converting to a char*/

// 	for(i=0;i < biString.length;i++){
// 	  uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
// 	}

// 	// we then simply join the string
// 	return uniString.join('');
//   }


// INTERMEDIATE SOLUTION
// function binaryAgent(str) {
// 	// Separate the binary code by space.
// 	str = str.split(' ');
// 	var power;
// 	var decValue = 0;
// 	var sentence = '';

// 	// Check each binary number from the array.
// 	for (var s = 0; s < str.length; s++) {
// 	  // Check each bit from binary number
// 	  for (var t = 0; t < str[s].length; t++) {
// 		// This only takes into consideration the active ones.
// 		if (str[s][t] == 1) {
// 		  // This is quivalent to 2 ** position
// 		  power = Math.pow(2, +str[s].length - t - 1);
// 		  decValue += power;

// 		  // Record the decimal value by adding the number to the previous one.
// 		}
// 	  }

// 	  // After the binary number is converted to decimal, convert it to string and store
// 	  sentence += (String.fromCharCode(decValue));

// 	  // Reset decimal value for next binary number.
// 	  decValue = 0;
// 	}

// 	return sentence;
//   }

// ADVANCED SOLUTION
// function binaryAgent(str) {
// 	return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
// }