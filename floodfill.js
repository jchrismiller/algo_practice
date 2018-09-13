function floodfill(arr, x, y, color, count) {

	console.log("Iteration " + count);
	var oldcolor = arr[x][y];
	console.log(arr);
	console.log("[" + x + "]"+"[" + y + "]");

	if (x > 0){ // check up
		if (arr[x-1][y] == oldcolor && arr[x-1][y] != color){
			arr[x][y] = color;
			console.log("Recurring");
			count++;
			floodfill(arr, x-1, y, color, count);
		}
	}

	if (y < arr.length-1){ // check right
		if (arr[x][y+1] == oldcolor && arr[x][y+1] != color){
			arr[x][y] = color;
			console.log("Recurring");
			count++;
			floodfill(arr, x, y+1, color, count);
		}
	}

	if (x < arr.length-1){ // check down
		if (arr[x+1][y] == oldcolor && arr[x+1][y] != color){
			arr[x][y] = color;
			console.log("Recurring");
			count++;
			floodfill(arr, x+1, y, color, count++);
		}
	}

	if (y > 0){ // check left
		if (arr[x][y-1] == oldcolor && arr[x][y-1] != color){
			arr[x][y] = color;
			console.log("Recurring");
			count++;
			floodfill(arr, x, y-1, color, count++)
		}
	}

	arr[x][y] = color;

	console.log("Finished Iteration " + count);
	console.log(arr);
	return arr;
}

var arr = [
[1, 2, 2, 2, 1],
[2, 2, 1, 1, 1],
[1, 1, 1, 2, 2],
[2, 2, 1, 1, 2],
[2, 2, 1, 2, 2]
];

var color = 9;
var x = 2
var y = 2;

floodfill(arr, x, y, color, 0);

/* expected result:

[[1, 2, 2, 2, 9],
[9, 2, 9, 9, 9],
[9, 9, 9, 2, 2],
[2, 2, 9, 9, 2],
[2, 2, 9, 2, 2]]

*/