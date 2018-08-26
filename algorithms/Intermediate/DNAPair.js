// Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// BASE CODE 
// function pairElement(str) {
//   return str;
// }

// pairElement("GCG");

// TEST CODE 
// pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


// Precode
// 1. Split input into seperate arrays
// 2. For each array, read the value of the element.
// 3. Based of the element, push the corresponding base pair

function pairElement(str) {
	str = str.split(""); //splits the input into seperate arrays

	for (var i = 0; i < str.length; i++) {
		switch(str[i]){ //for each index of the array, this switch case will match a base pair to it
			case 'A':
				str[i] = str[i].split(''); //the array is split into another array so we can push the matching base pair; cannot put this split before the switch case
				str[i].push('T');
				break;
			case 'T':
				str[i] = str[i].split('');
				str[i].push('A');
				break;
			case 'C':
				str[i] = str[i].split('');
				str[i].push('G');
				break;
			case 'G':
				str[i] = str[i].split('');
				str[i].push('C');
				break;
		} 
	}

	console.log(str);
  	return str;
}

pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


// BASIC SOLUTION #1
//     function pairElement(str) {
//       // Return each strand as an array of two elements, the original and the pair.
//       var paired = [];

//       // Function to check with strand to pair.
//       var search = function(char) {
//         switch (char) {
//           case 'A':
//             paired.push(['A', 'T']);
//             break;
//           case 'T':
//             paired.push(['T', 'A']);
//             break;
//           case 'C':
//             paired.push(['C', 'G']);
//             break;
//           case 'G':
//             paired.push(['G', 'C']);
//             break;
//         }
//       };

//       // Loops through the input and pair.
//       for (var i = 0; i < str.length; i++) {
//         search(str[i]);
//       }

//       return paired;
//     }

//     // test here
//     pairElement("GCG")

// INTERMEDIATE SOLUTION #2
//     function pairElement(str) {
//       //define a map object with all pair possibilities 
//       var map = {T:'A', A:'T', G:'C', C:'G'};
//       //split str into a char Array
//       strArr = str.split('');
//       //replace each Array item with a 2d Array using map
//       for (var i=0;i<strArr.length;i++){
//         strArr[i]=[strArr[i], map[strArr[i]]];
//       }
//      return strArr;
//     }

//     // test here
//     pairElement("GCG");

