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
function myReplace(str, before, after) {
	str = str.split(" ");
	console.log(str)
	let index = str.indexOf(before);

	if(before[0] === before[0].toUpperCase()){ //this checks to see if the first letter is capitalized or not
		let letter = after[0].toUpperCase(); 
		after = letter + after.slice(1) // this will restructure out string with a capitalized letter 
		console.log(after) 
	}

	str.splice(index,1,after)
	str = str.join(" ");
	console.log(index)
	console.log(str)
	return str;
  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");