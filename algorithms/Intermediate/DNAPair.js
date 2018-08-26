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
	str = str.split("");

	for (var i = 0; i < str.length; i++) {
		switch(str[i]){
			case 'A':
				str[i] = str[i].split(''); 
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