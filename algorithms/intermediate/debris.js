// Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia. https://en.wikipedia.org/wiki/Orbital_period

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.



// BASE CODE
// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   return arr;
// }

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


// TEST CODE
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) //should return [{name: "sputnik", orbitalPeriod: 86400}].
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) //should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

// PRECODE
// 1. Orbital Period equation is T = 2*pi*sqrt(a^3/u)
// 	1a. a = orbit of semi-major axis
// 	1b. u = GM =  standard gravitation parameter 
// 2. Turn equation to a formula that can be used in function
// 3. Plug into numbers and return the orbital period


// MY SOLUTION
function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	let answer = []; 
	for (var i = 0; i < arr.length; i++) { //if the input is an object, we will iterate through the object to find the orbital period
		let a = earthRadius + arr[i].avgAlt; //finds a, the semi-major axis, by adding the radius of the earth and the avg altitude
		let T = 2*Math.PI*Math.sqrt((Math.pow(a, 3))/GM)
		answer.push({
			name: arr[i].name,
			orbitalPeriod: Math.round(T)
		})
	}

	console.log(answer)
	return answer;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) //should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) //should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].



// BASIC SOLUTION
// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   var a = 2 * Math.PI;
//   var newArr = [];
//   var getOrbPeriod = function(obj) {
//     var c = Math.pow(earthRadius + obj.avgAlt, 3);
//     var b = Math.sqrt(c / GM);
//     var orbPeriod = Math.round(a * b);
//     delete obj.avgAlt;
//     obj.orbitalPeriod = orbPeriod;
//     return obj;
//   };

//   for (var elem in arr) {
//     newArr.push(getOrbPeriod(arr[elem]));
//   }

//   return newArr;
// }

// INTERMEDIATE SOLUTION
// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;

//   //Looping through each key in arr object
//   for(var prop in arr) {
//     //Rounding off the orbital period value
//     var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
//     //deleting the avgAlt property
//     delete arr[prop].avgAlt;
//     //adding orbitalPeriod property
//     arr[prop].orbitalPeriod = orbitalPer;
//   }

//   return arr;
// }


// ADVANCED SOLUTION
// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;

//   // Loop through each item in the array arr
//   arr.forEach(function(item) {
//     // Calculate the Orbital period value
//     var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
//     //Delete the avgAlt property
//     delete item.avgAlt;
//     //Add orbitalPeriod property
//     item.orbitalPeriod = tmp;
//   });
//   return arr;
// }