///Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow : {min: min, max: maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
	// return max
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6


//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8