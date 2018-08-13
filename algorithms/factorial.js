// Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.
// Remember to use Read-Search-Ask if you get stuck. Write your own code

// Base code
// function factorialize(num) {
//   return num;
// }
// factorialize(5);

function factorialize(num) {
	let result = num;

	if (num === 0 || num === 1){
		return 1;
	}

	while (num > 1){
		num--;
		result = result * num;
	}

  return console.log(result);
}
factorialize(5);


// Other Solutions

// Using Recursion
// function factorialize(num) {
//   if (num < 0) 
//         return -1;
//   else if (num == 0) 
//       return 1;
//   else {
//       return (num * factorialize(num - 1));
//   }
// }
// factorialize(5);

//Using a For Loop
// function factorialize(num) {
//   if (num === 0 || num === 1)
//     return 1;
//   for (var i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }
// factorialize(5);