// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// BASE CODE
// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   return arr;
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);

// chunkArrayInGroups(["a", "b", "c", "d"], 2) //should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) //should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) //should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) //should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

function chunkArrayInGroups(arr, size) {
	let arr1 = [];
	let arr2 = [];
	for(let i=0; i < arr.length; i++){
		if (i % size !== size - 1){
			arr1.push(arr[i])
		} else {
			arr1.push(arr[i]);
			arr2.push(arr1);
			arr1 = [];
		}
	}

	if (arr1.length !== 0){
		arr2.push(arr1)
	}

  	console.log(arr2)
  	return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2) //should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) //should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) //should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) //should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].