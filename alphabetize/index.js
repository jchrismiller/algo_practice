function alpha() {
  var input = document.getElementById("input").value;
	
	// Change user input to Lower Case
	var lower = input.toLowerCase();

	// Split string into Array
	var name = lower.split("");

	// Convert Character Array to Integer Array
	var num = toNum(name, alphabet);

	// Sort Integer Array
	var sorted = sortNum(num);

	// Covert Sorted Integer Array to Alphabetized Character Array
	var alphabetized = toAlpha(sorted, alphabet);

	// Convert Character Array to String
	alphabetized = alphabetized.join("");

	// Change first letter of string to Upper Case
	var upper = alphabetized.charAt(0).toUpperCase() + alphabetized.slice(1);

	document.getElementById("output").innerHTML = upper;
}

function toNum(arr, alphabet) {
	var numArr = [];
	for (var i=0; i<arr.length; i++){
		for (var j=0; j<alphabet.length; j++){
			if (arr[i] == alphabet[j]) {
				numArr.push(j);
			}
		}
	}
	return numArr;
}

function sortNum(arr) {
	for (var i = 0; i<arr.length; i++){
		for (var j = 0; j<arr.length; j++){

			if (arr[j+1] < arr[j]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

function toAlpha(arr, alphabet) {
	var alphaArr = [];
	for (var i=0; i<arr.length; i++){
		for (var j=0; j<alphabet.length; j++){
			if (arr[i] == [j]) {
				alphaArr.push(alphabet[j]);
			}
		}
	}
	return alphaArr;
}

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];