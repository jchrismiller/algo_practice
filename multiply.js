function multiply(x){
	var arr = [];
	for (var a = 0; a<x; a++){
		arr.push([]);
	}
	console.log(arr);

	for(var i = 0; i<x; i++){
		for(var j = 0; j<x; j++){
			if (i == 0 && j == 0){
				arr[i][j] = 1;
			}
			else if (i == 0){
				arr[i][j] = j+1;
			}
			else if (j == 0){
				arr[i][j] = i+1;
			}
			else{
				arr[i][j] = arr[i][0] * arr[0][j];
			}
			console.log(arr);
			console.log(`[${i}][${j}]`);
			console.log("----")

		}
	}

	console.log(arr);

}

multiply(4);