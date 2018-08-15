// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// BASE CODE
// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   return num;
// }

// getIndexToIns([40, 60], 50);

// getIndexToIns([10, 20, 30, 40, 50], 35) //should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 35) //should return a number.
// getIndexToIns([10, 20, 30, 40, 50], 30) //should return 2.
// getIndexToIns([10, 20, 30, 40, 50], 30) //should return a number.
// getIndexToIns([40, 60], 50) //should return 1.
// getIndexToIns([40, 60], 50) //should return a number.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  	arr = arr.sort((a,b)=> a-b);
  console.log("after sorting", arr)
  	let index = "";

  	for (let i=0; i < arr.length; i++){
	  	if(arr[i] >= num){
			index = i;
			console.log(index)
		  	return index; //this will make it return at the first match found;
		} 
  	}
  return arr.length //if all the numbers in the array are larger than the number, then it should be added at the end of the array
}


getIndexToIns([10, 20, 30, 40, 50], 35) //should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 30) //should return 2.
// getIndexToIns([40, 60], 50) //should return 1.