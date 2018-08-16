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


// SOLUTION 1
// function chunkArrayInGroups(arr, size) {

// 	var temp = [];
// 	var result = [];

// 	for (var a = 0; a < arr.length; a++) {
// 	  if (a % size !== size - 1)
// 		temp.push(arr[a]);
// 	  else {
// 		temp.push(arr[a]);
// 		result.push(temp);
// 		temp = [];
// 	  }
// 	}

// 	if (temp.length !== 0)
// 	  result.push(temp);
// 	return result;
//   }

// SOLUTION 2
// function chunkArrayInGroups(arr, size) {
// 	// Break it up.
// 	var arr2 = [];
// 	for (var i = 0; i < arr.length; i+=size) {
// 	  arr2.push(arr.slice(i , i+size));
// 	}
// 	return arr2;
//   }

// SOLUTION 3
// function chunkArrayInGroups(arr, size) {
// 	// Break it up.
// 	var newArr = [];
// 	var i = 0;

// 	while (i < arr.length) {
// 	  newArr.push(arr.slice(i, i+size));
// 	  i += size;
// 	}
// 	return newArr;
//   }
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);