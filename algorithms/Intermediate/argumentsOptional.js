// Intermediate Algorithm Scripting: Arguments Optional

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function addTogether() {
//   return false;
// }

// addTogether(2,3);

// TEST CODE
// addTogether(2, 3) //should return 5.
// addTogether(2)(3) //should return 5.
// addTogether("http://bit.ly/IqT6zt") //should return undefined.
// addTogether(2, "3") //should return undefined.
// addTogether(2)([3]) //should return undefined.

// PRECODE
// 1. Check for existence of arguments
// 2. If there is a 2nd argument, complete the arithmatic
// 3. If there isn't a 2nd argument, return the first argument and a new function that takes a new argument
// 4. New Function will sum first arguemnt and the new argument after number check

function addTogether() {
	let sum = 0;
	let arg1 = arguments[0] //if we dont declare arguments[0] as variable now, we wont be able to call on it for usage in the return function
	if (number(arg1) && number(arguments[1])){ // Case 1. Two numbers are inputted as arguments so we can sum normally
		sum = arg1 + arguments[1]
		console.log(sum)
		return sum;
	} 	else if (number(arg1) && !arguments[1]){ // Case 2. Second argument isn't inputted
 		return (
			function second(arg2){ // this will return a functional that takes another argument
				if(number(arg2)){ //if this new argument is also a number, we will sum it with the first argument
					sum = arg1 + arg2
					console.log(sum)
					return sum;
				}
			})
	}	else { //if numbers are not inputted, we will return undefined
		return undefined;
	}

	function number(arg){ //this callback function allows us quickly check that the arguments are a number
		if(typeof(arg) === 'number'){
			return arg
		}
	}
}

addTogether(2, 3) //should return 5.
addTogether(2)(3) //should return 5.
addTogether("http://bit.ly/IqT6zt") //should return undefined.
addTogether(2, "3") //should return undefined.
addTogether(2)([3]) //should return undefined.