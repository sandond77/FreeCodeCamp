// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// BASE CODE
// function destroyer(arr) {
// 	// Remove all the values
// 	return arr;
//   }
  
//   destroyer([1, 2, 3, 1, 2, 3], 2, 3);	 

// TEST CODE
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].


function destroyer(arr) {

	let arg = Array.prototype.slice.call(arguments);

	for (var i = 0; i < arr.length; i++) {
		for (var j = 1; j < arg.length; j++) {
			arr = arr.filter((arr) => (arr !== arg[j]))
		}
	}
	
	console.log(arr)

	return arr;
}


  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);