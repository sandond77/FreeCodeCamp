// Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// BASE CODE
// function smallestCommons(arr) {
//   return arr;
// }


// smallestCommons([1,5]);

// TEST CODE
// smallestCommons([1, 5])  //should return a number.
// smallestCommons([1, 5])  //should return 60.
// smallestCommons([5, 1]) // should return 60.
// smallestCommons([2, 10]) // should return 2520.
// smallestCommons([1, 13])  //should return 360360.
// smallestCommons([23, 18]) //should return 6056820.


// PRECODE 
// 1. Create a new array that contains the values in between the number range provided from largest to smallest
// 2. Use Euclidean Algorithm to the GCD
// 3. Use the GCD to find the LCM

function smallestCommons(arr) {
	let holder = [];
	let max = Math.max(arr[0],arr[1]); //find the max
	let min = Math.min(arr[0],arr[1]); //find the min

	for (let i = max; i >= min; i--) {  //creates a new array from largest to smallest
		holder.push(i);
	}

    let lcm = holder[0]; //starts the least common multiple at the largest value in the array

    for (let i = 1; i < holder.length; i++) { //loop for running through our array
    	var GCD = gcd(lcm, holder[i]); //calls on the gcd function to find the lcm 
    	lcm = (lcm * holder[i]) / GCD; // finds the lcm by dividing by the greatest common divisor
    	console.log(lcm = (lcm * holder[i]) / GCD);
    }
	console.log(lcm);
	return lcm
	
	// Watch https://www.youtube.com/watch?v=JUzYl1TYMcU for a walkthrough on Euclidean
	function gcd(a, b){ //Euclidean Algorithm to find the greatest common divisor 
		if (b === 0){
			return a; 
		} else {
			return gcd(b, a % b);
		}
  	}
}

smallestCommons([1, 5])  //should return 60.
smallestCommons([5, 1]) // should return 60.
smallestCommons([2, 10]) // should return 2520.
smallestCommons([1, 13])  //should return 360360.
smallestCommons([23, 18]) //should return 6056820.


// BASIC SOLUTION //slow solution. takes many iterations due to the nesting
// function smallestCommons(arr) {
//   // Sort array from greater to lowest
//   // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
//   arr.sort(function(a, b) {
//     return b - a;
//   });

//   // Create new array and add all values from greater to smaller from the
//   // original array.
//   var newArr = [];
//   for (var i = arr[0]; i >= arr[1]; i--) {
//     newArr.push(i);
//   }

//   // Variables needed declared outside the loops.
//   var quot = 0;
//   var loop = 1;
//   var n;

//   // Run code while n is not the same as the array length.
//   do {
//     quot = newArr[0] * loop * newArr[1];
//     for (n = 2; n < newArr.length; n++) {
//       if (quot % newArr[n] !== 0) {
//         break;
//       }
//     }

//     loop++;
//   } while (n !== newArr.length);

//   return quot;
// }

// INTERMEDIATE SOLUTION
// function smallestCommons(arr) {
//     var range = [];
//     for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
//     range.push(i);
//     }

//     // can use reduce() in place of this block
//     var lcm = range[0];
//     for (i = 1; i < range.length; i++) {
//     var GCD = gcd(lcm, range[i]);
//     lcm = (lcm * range[i]) / GCD;
//     }
//     return lcm;

//     function gcd(x, y) {    // Implements the Euclidean Algorithm
//     if (y === 0)
//         return x;
//     else
//         return gcd(y, x%y);
//     }
// }

// ADVANCED SOLUTION
// function smallestCommons(arr) {

//   // range
//   let min = Math.min.apply(null, arr);
//   let max = Math.max.apply(null, arr);

//   let smallestCommon = lcm(min, min + 1);

//   while(min < max) {
//     min++;
//     smallestCommon = lcm(smallestCommon, min);
//   }

//   return smallestCommon;
// }

// *
//  * Calculates Greatest Common Divisor
//  * of two nubers using Euclidean algorithm
//  * https://en.wikipedia.org/wiki/Euclidean_algorithm
 
// function gcd(a, b) {
//   while (b > 0) {
//     let tmp = a;
//     a = b;
//     b = tmp % b;
//   }
//   return a;
// }

// /**
//  * Calculates Least Common Multiple
//  * for two numbers utilising GCD
//  */
// function lcm(a, b) {
//   return (a * b / gcd(a, b));
// }


// // test here
// smallestCommons([1,5]);