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