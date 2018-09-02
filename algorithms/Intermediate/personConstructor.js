// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// var Person = function(firstAndLast) {
// 	// Complete the method below and implement the others similarly
// 	this.getFullName = function() {
// 	  return "";
// 	};
// 	return firstAndLast;
//   };
  
//   var bob = new Person('Bob Ross');
//   bob.getFullName();

// TEST CODE
// Object.keys(bob).length //should return 6.
// bob instanceof Person //should return true.
// bob.firstName //should return undefined.
// bob.lastName //should return undefined.
// bob.getFirstName() //should return "Bob".
// bob.getLastName() //should return "Ross".
// bob.getFullName() //should return "Bob Ross".
// bob.getFullName() //should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() //should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() //should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() //should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() //should return "Curry" after bob.setFullName("Haskell Curry").

// PRECODE
// 1. Declare a new constructor
// 2. Establish the fields for the constructor and make sure the inputs are strings

// MY SOLUTION
var Person = function(firstAndLast) {
	let name = firstAndLast.split(" ");
	// Complete the method below and implement the others similarly
	this.getFullName = function() {
		console.log(name.join(" "))
		return (name.join(" "));
	};

	this.getLastName = function(){
		return name[1];
	};

	this.getFirstName = function(){
		return name[0];
	};

	this.setFirstName = function(first){
		name[0] = first;
		console.log(name[0])
		return name[0];
	};
	
	this.setLastName = function(last){
		name[1] = last;
		console.log(name[1])
		return name[1];
	};
	
	this.setFullName = function(firstAndLast){
		name = firstAndLast.split(" ");
		return firstAndLast
	};

	return firstAndLast;
};
	
var bob = new Person('Bob Ross');
bob.getFullName();

bob.setFirstName("Haskell")
bob.getFullName();
bob.setLastName("Curry")
bob.getFullName();
bob.setFullName('Haskell Curry');
bob.getFullName();



// BASIC SOLUTION
// var Person = function(firstAndLast) {
// 	var fullName = firstAndLast;
  
// 	this.getFirstName = function() {
// 	  return fullName.split(" ")[0];
// 	};
  
// 	this.getLastName = function() {
// 	  return fullName.split(" ")[1];
// 	};
  
// 	this.getFullName = function() {
// 	  return fullName;
// 	};
  
// 	this.setFirstName = function(name) {
// 	  fullName = name + " " + fullName.split(" ")[1];
// 	};
  
// 	this.setLastName = function(name) {
// 	  fullName = fullName.split(" ")[0] + " " + name;
// 	};
  
// 	this.setFullName = function(name) {
// 	  fullName = name;
// 	};
//   };
  
//   var bob = new Person('Bob Ross');
//   bob.getFullName();