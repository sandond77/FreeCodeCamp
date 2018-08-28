// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


// BASE CODE
// function convertHTML(str) {
//   // &colon;&rpar;
//   return str;
// }

// convertHTML("Dolce & Gabbana");

// TEST CODE
// convertHTML("Dolce & Gabbana") //should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") //should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') //should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Schindler's List") //should return Schindler&​apos;s List.
// convertHTML("<>") //should return &​lt;&​gt;.
// convertHTML("abc") //should return abc.

// PRECODE
// 1. Determine the HTML entities for the 5 cases (&, <, >, " (double quote), and ' (apostrophe))
// 2. Split up string into array 
// 3. Iterate through array and use switch to change the characters into the corresponding HTML entity
// 4. Rejoin the array into string

function convertHTML(str) {
	// &colon;&rpar;
	str = str.split('');

	for (var i = 0; i < str.length; i++) {
	  	switch (str[i]){
			case ('&'): 
				str[i] = '&amp;';
				break
			case ('<'):
				str[i] = '&lt;';
				break			
			case ('>'):
				str[i] = '&gt;';
				break
			case ('"'):
				str[i] = '&quot;';
				break
			case ('\''):
				str[i] = '&apos;';
				break
	  	}
	}
	
	str = str.join("")
	console.log(str)
	return str;
}

convertHTML("Dolce & Gabbana") //should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") //should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') //should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List") //should return Schindler&​apos;s List.
convertHTML("<>") //should return &​lt;&​gt;.
convertHTML("abc") //should return abc.


// BASIC SOLUTION 
// function convertHTML(str) {
//   // Split by character to avoid problems.

//   var temp = str.split('');

//   // Since we are only checking for a few HTML elements I used a switch

//   for (var i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case '<':
//         temp[i] = '&lt;';
//         break;
//       case '&':
//         temp[i] = '&amp;';
//         break;
//       case '>':
//         temp[i] = '&gt;';
//         break;
//       case '"':
//         temp[i] = '&quot;';
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }

//   temp = temp.join('');
//   return temp;
// }

// INTERMEDIATE SOLUTION
// function convertHTML(str) {
// //Chaining of replace method with different arguments
//   str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
// return str;
// }

// ADVANCED SOLUTION
// function convertHTML(str) {
//   // Use Object Lookup to declare as many HTML entities as needed.
//   htmlEntities={
//     '&':'&amp;',
//     '<':'&lt;',
//     '>':'&gt;',
//     '\"':'&quot;',
//     '\'':"&apos;"
//   };
//   //Use map function to return a filtered str with all entities changed automatically.
//   return str.split('').map(function(entity){
//     return htmlEntities[entity] || entity;
//   }).join('');
// }

// // test here
// convertHTML("Dolce & Gabbana");