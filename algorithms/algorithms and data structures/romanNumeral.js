// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.


// BASE CODE
// function convertToRoman(num) {
//  return num;
// }

// convertToRoman(36);

// TEST CODE
// convertToRoman(2)// should return "II".
// convertToRoman(3)// should return "III".
// convertToRoman(4) //should return "IV".
// convertToRoman(5) //should return "V".
// convertToRoman(9)// should return "IX".
// convertToRoman(12) //should return "XII".
// convertToRoman(16) //should return "XVI".
// convertToRoman(29) //should return "XXIX".
// convertToRoman(44) //should return "XLIV".
// convertToRoman(45) //should return "XLV"
// convertToRoman(68)// should return "LXVIII"
// convertToRoman(83)// should return "LXXXIII"
// convertToRoman(97)// should return "XCVII"
// convertToRoman(99) //should return "XCIX"
// convertToRoman(400) //should return "CD"
// convertToRoman(500) //should return "D"
// convertToRoman(501) //should return "DI"
// convertToRoman(649) //should return "DCXLIX"
// convertToRoman(798) //should return "DCCXCVIII"
// convertToRoman(891)// should return "DCCCXCI"
// convertToRoman(1000) //should return "M"
// convertToRoman(1004) //should return "MIV"
// convertToRoman(1006) //should return "MVI"
// convertToRoman(1023) //should return "MXXIII"
// convertToRoman(2014) //should return "MMXIV"
// convertToRoman(3999) //should return "MMMCMXCIX"

// PRECODE
// 1. Roman Numerals are base5. On the 4th value of any base 5 digit, the value is calulated by subtraction. The same letter isnt repeated more than 3 times.
// 2. Need to find a way to convert from base10 to base5. Since roman numerals are strings, we need to use string.concat() to get the final result
// 3. I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000


function convertToRoman(num) {
	let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];  //need to explicitly define the special 4 and 9 cases
	let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]; //we could also define this from low to high, but we would need to reverse the array or for loop
	let romanSum = "";
	
	for (var i = 0; i < values.length; i++) {
		while (values[i] <= num){
			romanSum += romans[i]  //this will concat the roman numerals as we run through the numerals
			num -= values[i]  //since the loop runs until values[i] <= num, we need this to eventually hit 0
			// console.log(num)
			// console.log(romanSum)
		}
	}
	
	console.log(num)
	console.log(romanSum)
 	return romanSum;
}

convertToRoman(2);
convertToRoman(3999) //should return "MMMCMXCIX"



// SOLUTION #1
// var convertToRoman = function(num) {

//   var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
//   var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

//   var romanized = '';

//   for (var index = 0; index < decimalValue.length; index++) {
//     while (decimalValue[index] <= num) {
//       romanized += romanNumeral[index];
//       num -= decimalValue[index];
//     }
//   }

//   return romanized;
// }

// SOLUTION #2
// function convertToRoman(num) {
//  var romans = ["I", "V", "X", "L", "C", "D", "M"],
//      ints = [],
//      romanNumber = [],
//      numeral = "";
//   while (num) {
//     ints.push(num % 10);
//     num = Math.floor(num/10);
//   }
//   for (i=0; i<ints.length; i++){
//       units(ints[i]);
//   }
//   function units(){
//     numeral = romans[i*2];
//     switch(ints[i]) {
//       case 1:
//         romanNumber.push(numeral);
//         break;
//       case 2:
//         romanNumber.push(numeral.concat(numeral));
//         break;
//       case 3:
//         romanNumber.push(numeral.concat(numeral).concat(numeral));
//         break;
//       case 4:
//         romanNumber.push(numeral.concat(romans[(i*2)+1]));
//         break;
//       case 5:
//         romanNumber.push(romans[(i*2)+1]);
//         break;
//       case 6:
//         romanNumber.push(romans[(i*2)+1].concat(numeral));
//         break;
//       case 7:
//         romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral));
//         break;
//       case 8:
//         romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
//         break;
//       case 9:
//         romanNumber.push(romans[i*2].concat(romans[(i*2)+2]));
//       }
//     }
//   return romanNumber.reverse().join("").toString();
// }


// SOLUTION #3
// function convertToRoman(num) {
//   var romans = 
//   // 10^i 10^i*5
//     ["I", "V"], // 10^0
//     ["X", "L"], // 10^1
//     ["C", "D"], // 10^2
//     ["M"]       // 10^3
//   ],
//       digits = num.toString()
//         .split('')
//         .reverse()
//         .map(function(item, index) {
//           return parseInt(item);
//         }),
//       numeral = "";

//   // Loop through each digit, starting with the ones place
//   for (var i=0; i<digits.length; i++) {
//     // Make a Roman numeral that ignores 5-multiples and shortening rules
//     numeral = romans[i][0].repeat(digits[i]) + numeral;
//     // Check for a Roman numeral 5-multiple version
//     if (romans[i][1]) {
//       numeral = numeral
//         // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
//         .replace(romans[i][0].repeat(5), romans[i][1])
//         // Shorten occurrences of 9 * 10^i
//         .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0])
//         // Shorten occurrences of 4 * 10^i
//         .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
//     }
//   }

//   return numeral;
// }