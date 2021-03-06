// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// BASE CODE
// function bouncer(arr) {
// 	// Don't show a false ID to this bouncer.
// 	return arr;
//   }
  
//   bouncer([7, "ate", "", false, 9]);

// TEST CODE
// bouncer([7, "ate", "", false, 9]) //should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) //should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) //should return [].
// bouncer([1, null, NaN, 2, undefined]) //should return [1, 2].

function bouncer(arr) {
	// Don't show a false ID to this bouncer.
	arr = arr.filter(Boolean)
	console.log(arr)
	return arr;
  }
  
bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]) //should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) //should return [].
bouncer([1, null, NaN, 2, undefined]) //should return [1, 2].