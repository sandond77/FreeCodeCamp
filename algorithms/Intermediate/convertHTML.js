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