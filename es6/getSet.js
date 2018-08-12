
// getter setter example
// class Book {
// 	constructor(author) {
// 	  this._author = author;
// 	}
// 	// getter
// 	get writer(){
// 	  return this._author;
// 	}
// 	// setter
// 	set writer(updatedAuthor){
// 	  this._author = updatedAuthor;
// 	}
// }

// const lol = new Book('anonymous');
// console.log(lol.writer);  // anonymous
// lol.writer = 'wut';
// console.log(lol.writer);  // wut


// Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.
// Now create getter and setter in the class, to obtain the temperature in Celsius scale.
// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale

// Note
// When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.
// This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.
// In other words, you are abstracting implementation details from the consumer.

function makeClass() {
	"use strict";
	/* Alter code below this line */
	class Thermostat{
	  constructor(Fahrenheit){
		this.temperature = Fahrenheit;
	  }
  
	  get temp(){
		return this.temperature;
	  }
  
	  set temp(fahrenheit){
		return this.temperature = (5/9) * (fahrenheit - 32);
	  }
	}
	/* Alter code above this line */
	return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  console.log(thermos.temp);
  thermos.temp = 76;
  console.log(thermos)