// Intermediate Algorithm Scripting: Sum All Primes
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function sumPrimes(num) {
//   return num;
// }

// sumPrimes(10);

// TEST CODE
// sumPrimes(10) //should return a number.
// sumPrimes(10) //should return 17.
// sumPrimes(977) //should return 73156.

// PRECODE
// 1. Use two for loops.
// 	a. To count up towards the inputted number
// 	b. To check if there's a remainder after dividing
// 2. If there is a remainde at anything besides dividing by itself, return flag variable as false and return undefined.
// 3. If there is no remainder, return flag variable as true.


//MY SOLUTION
function sumPrimes(num) {
	let remainder = false; //flag variable that starts false, meaning we have a prime number
	let sum = 0;

	for (var i = 2; i <= num; i++) { //first loop for counting up to the inputted number
		for (var j = 2; j < i; j++) { //second loop for counting the numbers to divide by
		 	if (i % j == 0){ //divides the first number loop by the second number loop to see if theres a remainder
		 		remainder = true; //if there is no remainder, flag variable will become true and indicates it is not a prime number
		 	} 
		}

		if (remainder === false) { //if our flag variable did not change, we will sum that number
			sum += i
		}

		remainder = false; //resets our flag variable to false if it did change
	}

	console.log(sum)
  return sum;
}

sumPrimes(10);
sumPrimes(977) //should return 73156.
