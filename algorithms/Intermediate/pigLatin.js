// Intermediate Algorithm Scripting: Pig Latin

// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");

// TEST CASES
// translatePigLatin("california") //should return "aliforniacay".
// translatePigLatin("paragraphs")// should return "aragraphspay".
// translatePigLatin("glove") //should return "oveglay".
// translatePigLatin("algorithm") //should return "algorithmway".
// translatePigLatin("eight") //should return "eightway".

function translatePigLatin(str) {
  return str;
}

// Precode
// 1. Find consonant cluster via regex by stopping when a vowel is hit
// 2. Extract the cluster. 
// 3. Append -ay to the end cluster
// 4. Append modified cluster to the end of string

translatePigLatin("consonant");