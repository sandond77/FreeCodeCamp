// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// BASE CODE
// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   return str;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// TEST CODE
// truncateString("A-tisket a-tasket A green and yellow basket", 8) //should return "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 11) //should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) //should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) //should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) //should return "A...".
// truncateString("Absolutely Longer", 2) //should return "Ab...".

// My Solution #1
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
  	str = str.split("").reverse().join("")
	str = str.substr((str.length-num));
	str = str.split("").reverse().join("")
	str = str.concat("...")
	console.log(str)
	return str;
  } else {
  	console.log(str)
  	return str;
  }
}

// My Solution #2
function truncateString(str, num) {
  // Clear out that junk in your trunk
  	// console.log(str.length)
	if (str.length > num) {
		str = str.slice(0,num);
		str = str.concat("...");
		console.log(str);
		return str;
	} else {
		console.log(str);
	  	return str;
	}
}


truncateString("A-tisket a-tasket A green and yellow basket", 8) //should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11) //should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) //should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) //should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) //should return "A...".
truncateString("Absolutely Longer", 2) //should return "Ab...".



// GIVEN SOLUTIONS 1

// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num && num > 3) {
//     return str.slice(0, (num - 3)) + '...';
//   } else if (str.length > num && num <= 3) {
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }
// }

// GIVEN SOLUTIONS 2
// function truncateString(str, num) {
//   if (str.length <= num) {
//     return str;
//   } else {
//     return str.slice(0, num > 3 ? num - 3 : num) + '...';
//   }
// }