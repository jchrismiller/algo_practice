var rl = require('readline');
var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("Paste novel here.", function(input) {

	// Change user input to Lower Case
	var lower = input.toLowerCase();
	var nopunct = lower.replace(/,/g, "").replace(/\./g, "").replace(/\"/g, "").replace(/\!/g, "").replace(/\?/g, "");

	// Split string into Array
	var novel_arr = nopunct.split(" ");

	// Create empty object to hold array values
	var novel_obj = {};

	// Loop through novel array
	for (var i = 0; i < novel_arr.length; i++){
		// if the word is in the object, increment value
		if (novel_arr[i] in novel_obj){
			novel_obj[novel_arr[i]] += 1;
		}

		// else set value to 1
		else {
			novel_obj[novel_arr[i]] = 1;
		}
	}

	console.log(novel_obj);
});