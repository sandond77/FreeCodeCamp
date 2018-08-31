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