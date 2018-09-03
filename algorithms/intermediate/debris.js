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


function orbitalPeriod(arr) {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	let answer = [];
	for (var i = 0; i < arr.length; i++) {
		let a = earthRadius + arr[i].avgAlt;
		let T = 2*Math.PI*Math.sqrt((Math.pow(a, 3))/GM)
		console.log(a)
		console.log(orbitalPeriod)
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