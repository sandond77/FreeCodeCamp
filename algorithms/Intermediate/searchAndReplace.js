// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function myReplace(str, before, after) {
// 	return str;
//   }
  
// TEST CASE
// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".

// Precode 
// 1. split up string into array using array.split(); each word = one element
// 2. Check to see if the letter being replace is capitalized or not
// 3. Use array.indexOf() to find where word needs to be replaced
// 4. Use array.splice() to sub out the words

// My Solution
// function myReplace(str, before, after) {
// 	str = str.split(" "); //this will create an array from the string, with the spaces seperating each element
// 	console.log(str)
// 	let index = str.indexOf(before);

// 	if(before[0] === before[0].toUpperCase()){ //this checks to see if the first letter is capitalized or not
// 		let letter = after[0].toUpperCase(); 
// 		after = letter + after.slice(1) // this will restructure out string with a capitalized letter 
// 		console.log(after) 
// 	}

// 	str.splice(index,1,after) //this will remove the current words at the given index and splice in the new word
// 	str = str.join(" "); //this will join our array back together with spaces
// 	console.log(index)
// 	console.log(str)
// 	return str;
//   }
  
//   myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


// BASIC SOLUTION
// function myReplace(str, before, after) {
// 	// Find index where before is on string
// 	var index = str.indexOf(before);
// 	// Check to see if the first letter is uppercase or not
// 	if (str[index] === str[index].toUpperCase()) {
// 	  // Change the after word to be capitalized before we use it.
// 	  after = after.charAt(0).toUpperCase() + after.slice(1);
// 	}
// 	// Now replace the original str with the edited one.
// 	str = str.replace(before, after);
  
// 	return str;
//   }

// INTERMEDIATE SOLUTION
// function myReplace(str, before, after) {
// 	//Create a regular expression object
// 	  var re = new RegExp(before,"gi");
// 	//Check whether the first letter is uppercase or not
// 	  if(/[A-Z]/.test(before[0])){
// 	  //Change the word to be capitalized
// 		after = after.charAt(0).toUpperCase()+after.slice(1);
// 		 }
// 		 //Replace the original word with new one
// 	  var  newStr =  str.replace(re,after);
	
// 	 return newStr;
// }
	

// ADVANCED SOLUTION
// function myReplace(str, before, after) {

//     // create a function that will change the casing of any number of letter in parameter "target"
//     // matching parameter "source"
//     function applyCasing(source, target) {
//         // split the source and target strings to array of letters
//         var targetArr = target.split("");
//         var sourceArr = source.split("");
//         // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
//         for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
//             // find out the casing of every letter from sourceArr using regular expression
//             // if sourceArr[i] is upper case then convert targetArr[i] to upper case
//             if (/[A-Z]/.test(sourceArr[i])) {
//                 targetArr[i] = targetArr[i].toUpperCase();
//             }
//             // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
//             else targetArr[i] = targetArr[i].toLowerCase();
//         }
//         // join modified targetArr to string and return
//         return (targetArr.join(""));
//     }

//     // replace "before" with "after" with "before"-casing
//     return str.replace(before, applyCasing(before, after));
}
