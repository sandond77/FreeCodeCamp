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
// 1. Turn string into array
// 2. Use string.charCodeAt() to see if the next unicode value exists or not 
// 3. Use string.fromCharCode() to return the unicode
// 4. If nothing is spliced in, return undefined. 



function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");