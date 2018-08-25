// Intermediate Algorithm Scripting: Pig Latin

// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function translatePigLatin(str) {
//   return str;
// }

// translatePigLatin("consonant");

// TEST CASES
// translatePigLatin("california") //should return "aliforniacay".
// translatePigLatin("paragraphs")// should return "aragraphspay".
// translatePigLatin("glove") //should return "oveglay".
// translatePigLatin("algorithm") //should return "algorithmway".
// translatePigLatin("eight") //should return "eightway".

// Precode
// 1. Find consonant cluster via regex by stopping when a vowel is hit
// 2. Extract the cluster. 
// 3. Append -ay or -way to the end cluster
// 4. Append modified cluster to the end of string

// My Solution
function translatePigLatin(str) {
  let regex = /[aeiou]/g; //this regex will find the index of the first appearance of a vowel
  let index = str.search(regex); //search is similar to string.indexOf() except it can take regex 

  if (index === 0){ //if the initial letter is a vowel
    str = str.concat('way')
  } else if (index === -1) { //if the word doesnt contain a vowel
    str = str.concat('ay')
  } else { //if the word does contain a vowel and it isnt the initial letter
    let consonant = str.slice(0,index).concat('ay'); //this will slice out all consonant terms before the vowel and add -ay to it
    // console.log(consonant)
    str = str.slice(index).concat(consonant);
  }
  
  console.log(index)
  console.log(str)
  return str;
}

translatePigLatin("consonant");
translatePigLatin("california") //should return "aliforniacay".
translatePigLatin("paragraphs")// should return "aragraphspay".
translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
translatePigLatin("eight") //should return "eightway".
translatePigLatin("TV")