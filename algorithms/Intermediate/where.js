// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.


// BASE CODE
// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//   // Only change code below this line
  
  
//   // Only change code above this line
//   return arr;
// }

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// TEST CODE
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) //should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })// should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})// should return []



function whatIsInAName(collection, source) {
	var arr = [];
  	// What's in a name?
  	var keys = Object.keys(source);
	console.log(`keys ${ keys }`)
	arr = collection.filter((collection) =>{
		for (var i = 0; i < keys.length; i++) {
			//enable this line to see why the solution works
			console.log(`--------------------------- 
			current property: ${collection.hasOwnProperty(keys[i])}
			current key: ${keys[i]}
			current collection: ${collection[keys[i]]}
			current source: ${source[keys[i]]}`
			)
			if(!collection.hasOwnProperty(keys[i]) || collection[keys[i]] !== source[keys[i]]){
				return false
			} 
		}
		return true
	})
	
	console.log(arr)
	return arr
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })// should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})// should return []



// GIVEN SOLUTION #1
// function whatIsInAName(collection, source) {
// 	var srcKeys = Object.keys(source);
  
// 	// filter the collection
// 	return collection.filter(function (obj) {
// 	  for(var i = 0; i < srcKeys.length; i++) {
// 		if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !=gi= source[srcKeys[i]]) {
// 		  return false;
// 		}
// 	  }
// 	  return true;
// 	});
// }

// GIVEN SOLUTION #2
// function whatIsInAName(collection, source) {
// 	var srcKeys = Object.keys(source);
  
// 	return collection.filter(function (obj) {
// 	  return srcKeys.every(function (key) {
// 		return obj.hasOwnProperty(key) && obj[key] === source[key];
// 	  });
// 	});
// }
  
// GIVEN SOLUTION #3
// function whatIsInAName(collection, source) {
// 	var srcKeys = Object.keys(source);
  
// 	// filter the collection
// 	return collection.filter(function (obj) {
// 	  return srcKeys
// 		.map(function(key) {
// 		  return obj.hasOwnProperty(key) && obj[key] === source[key];
// 		})
// 		.reduce(function(a, b) {
// 		  return a && b;
// 		});
// 	});
// }
  