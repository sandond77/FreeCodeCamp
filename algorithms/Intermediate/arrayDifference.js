// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
// Note
// You can return the array with its elements in any order.

// BASE CODE 
// function diffArray(arr1, arr2) {
// 	var newArr = [];
// 	// Same, same; but different.
// 	return newArr;
//   }
  
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// TEST CASES
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] //should return ["pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] //should return ["diorite", "pink wool"].
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] //should return [].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] //should return [4].
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] //should return ["piglet", 4].
// [], ["snuffleupagus", "cookie monster", "elmo"] //should return ["snuffleupagus", "cookie monster", "elmo"].
// [1, "calf", 3, "piglet"], [7, "filly"] //should return [1, "calf", 3, "piglet", 7, "filly"].




function diffArray(arr1, arr2) {
	var newArr = [];

	function search(arr1,arr2){
		for (let i=0; i < arr1.length; i++){
			if(arr2.indexOf(arr1[i]) === -1){
				newArr.push(arr1[i])
			}
		}
	}
	search(arr1,arr2);
	search(arr2,arr1);
	
	console.log(newArr);
	return newArr;
  }
  
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) //should return ["pink wool"].
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) //should return ["diorite", "pink wool"].
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) //should return [].
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) //should return [4].
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])//should return ["piglet", 4].
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]) //should return ["snuffleupagus", "cookie monster", "elmo"].
diffArray([1, "calf", 3, "piglet"], [7, "filly"]) //should return [1, "calf", 3, "piglet", 7, "filly"].