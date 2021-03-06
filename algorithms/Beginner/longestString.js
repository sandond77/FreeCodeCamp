// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// BASE CODE
// function findLongestWordLength(str) {
//   return str.length;
// }



function findLongestWordLength(str) {
	let strArray = str.split(" ");
	let j = 0;
	console.log(strArray);
	for (let i = 0; i < (strArray.length); i++) {
		if (strArray[i].length > j) {
			console.log(`\n ${strArray[i].length} is the current length`);
			console.log(`${i} index`)
			j = strArray[i].length;
		}
	}
	console.log(j)
  return j;
}

//Test Cases
// findLongestWordLength("The quick brown fox jumped over the lazy dog") //should return 6.
// findLongestWordLength("May the force be with you") //should return 5.
// findLongestWordLength("Google do a barrel roll") //should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") //should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") //should return 19.

//basic solution
// function findLongestWordLength(str) {
//   var words = str.split(' ');
//   var maxLength = 0;

//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }

//   return maxLength;
// }