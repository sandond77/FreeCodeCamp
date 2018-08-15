// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// BASE CODE
// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   return bool;
// }

// booWho(null);

// TEST CODE
// booWho(true) should return true.
// booWho(false) should return true.
// booWho([1, 2, 3]) should return false.
// booWho([].slice) should return false.
// booWho({ "a": 1 }) should return false.
// booWho(1) should return false.
// booWho(NaN) should return false.
// booWho("a") should return false.
// booWho("true") should return false.
// booWho("false") should return false.


//MY SOLUTION #1
function booWho(bool) {
	return (typeof bool === "boolean") ? console.log(true) : console.log(false) ;
}

//MY SOLUTION #2
function booWho(bool) {
	typeof bool === "boolean"
		return console.log(true)
	} else {
		return console.log(false)
	}
 
booWho(true) //should return true.
booWho(false) //should return true.
booWho([1, 2, 3]) //should return false.
booWho([].slice) //should return false.
booWho({ "a": 1 }) //should return false.
booWho(1) //should return false.
booWho(NaN) //should return false.
booWho("a") //should return false.
booWho("true") //should return false.
booWho("false") //should return false.


// SOLUTION
// function booWho(bool) {
// 	return typeof bool === 'boolean';
//   }