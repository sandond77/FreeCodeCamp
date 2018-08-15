// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// BASE CODE

// function titleCase(str) {
// 	return str;
//   }
  
// titleCase("I'm a little tea pot");

// titleCase("I'm a little tea pot") //should return a string.
// titleCase("I'm a little tea pot") //should return I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") //should return Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") //should return Here Is My Handle Here Is My Spout.

function titleCase(str) {
	str = str.toLowerCase();
	str = str.split(" ");
	for (let i=0; i < str.length; i++){
		str[i] = str[i][0].toUpperCase() + str[i].slice(1) // Strings are immutable in JS. need to create new string; cant nnot set str[i][0] = ...
	}
	str = str.join(" ");
	console.log(str);
	return str;
}
  
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt") //should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") //should return Here Is My Handle Here Is My Spout.

// SOLUTION #1 - SIMPLE METHOD
// function titleCase(str) {
// 	str = str.toLowerCase().split(' ');
// 	for (var i = 0; i < str.length; i++) {
// 	  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
// 	}
// 	return str.join(' ');
//   }
  
// SOLUTION #2 - USING MAP
// function titleCase(str) {
// 	return str.toLowerCase().split(' ').map(function(word) {
// 	  return (word.charAt(0).toUpperCase() + word.slice(1));
// 	}).join(' ');
// }


