function answer(string, obj, obj2){
	var arr = string.split("");
	var new_arr = [];
	for (let i=0; i<arr.length; i++){
		if (arr[i] in obj){
			var temp1 = obj[arr[i]];
			var temp2 = obj2[temp1];
			new_arr.push(temp2);
		}
		else {
			new_arr.push(arr[i]);
		}
	}
	var new_string = new_arr.join('');
	console.log(new_string);
}

var s = "Yvzs! I xzm'g yvorvev Lzmxv olhg srh qly zg gsv xlolmb!!";

var obj = {"a":1, "b":2, "c":3, "d":4, "e":5, "f":6, "g":7, "h":8, "i":9, "j":10, "k":11, "l":12, "m":13, "n":14, "o":15, "p":16, "q":17, "r":18, "s":19, "t":20, "u":21, "v":22, "w":23, "x":24, "y":25, "z":26};

var obj2 = {1:"z", 2:"y", 3:"x", 4:"w", 5:"v", 6:"u", 7:"t", 8:"s", 9:"r", 10:"q", 11:"p", 12:"o", 13:"n", 14:"m", 15:"l", 16:"k", 17:"j", 18:"i", 19:"h", 20:"g", 21:"f", 22:"e", 23:"d", 24:"c", 25:"b", 26:"a"};

answer(s, obj, obj2);