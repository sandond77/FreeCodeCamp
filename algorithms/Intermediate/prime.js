// Intermediate Algorithm Scripting: Sum All Primes
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.
// 1 is not a prime number

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


// BASIC SOLUTION
// function sumPrimes(num) {
//   var res = 0;

//   // Function to get the primes up to max in an array
//   function getPrimes(max) {
//     var sieve = [];
//     var i;
//     var j;
//     var primes = [];
//     for (i = 2; i <= max; ++i) {
//       if (!sieve[i]) {
//         // i has not been marked -- it is prime
//         primes.push(i);
//         for (j = i << 1; j <= max; j += i) {
//           sieve[j] = true;
//         }
//       }
//     }

//     return primes;
//   }

//   // Add the primes
//   var primes = getPrimes(num);
//   for (var p = 0; p < primes.length; p++) {
//     res += primes[p];
//   }

//   return res;
// }


// INTERMEDIATE SOLUTION
// function sumPrimes(num) {
//   // function to check if the number presented is prime
//   function isPrime(number){
//       for (i = 2; i <= number; i++){
//           if(number % i === 0 && number!= i){
//           // return true if it is divisible by any number that is not itself.
//              return false;
//           }
//        }
//        // if it passes the for loops conditions it is a prime
//       return true;
//   }
//   // 1 is not a prime, so return nothing, also stops the recursive calls.
//   if (num === 1){
//     return 0;
//   }
//   // Check if your number is not prime
//   if(isPrime(num) === false){
//   // for non primes check the next number down from your maximum number, do not add anything to your answer
//     return sumPrimes(num - 1);
//   }

//   // Check if your number is prime
//   if(isPrime(num) === true){
//   // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
//     return num + sumPrimes(num - 1);
//   }
// }

// ADVANCED SOLUTION
// function sumPrimes(num) {
//   // step 1	
//   let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
//   // step 2
//   let onlyPrimes = arr.filter( (n) => { 
//     let m = n-1;
//     while (m > 1 && m >= Math.sqrt(n)) { 
//       if ((n % m) === 0) 
//         return false;
//         m--;
//     }
//       return true;
//   });
//   // step 3
//   return onlyPrimes.reduce((a,b) => a+b); 
// }