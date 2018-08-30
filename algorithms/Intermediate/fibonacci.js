// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function sumFibs(num) {
//   return num;
// }
// sumFibs(4);

// TEST CODE
// sumFibs(1)  //should return a number.
// sumFibs(1000)  //should return 1785.
// sumFibs(4000000)  //should return 4613732.
// sumFibs(4) // should return 5.
// sumFibs(75024) // should return 60696.
// sumFibs(75025)  //should return 135721

// PRECODE
// 1. Code the Fibonacci sequence 
// 2. As the numbers are being summed, check to see if the number is odd.
// 3. Sum up and return the odd numbers 

// MY SOLUTION 
function sumFibs(num) {
	let number = 0;
	let number2 = 1;
	let sum = 0;

	while (number2 <= num){
		if (number2 % 2 !== 0) {
			sum += number2
		}

		number2 = number + number2;
		number = number2 - number;
		// console.log("number:" + number);
		//		console.log("sum:" + sum)
	}
	
	console.log("sum:" + sum)
 	return sum;
}

sumFibs(1000)  //should return 1785.
sumFibs(4000000)  //should return 4613732.
sumFibs(4) // should return 5.
sumFibs(75024) // should return 60696.
sumFibs(75025)  //should return 135721
