
// print odd 1-255

function printOdd(){
	for(var i=1; i<=255; i++){
		if(i % 2 != 0){
			console.log(i);
		}
	}
	return;
}
printOdd();

// print sum 1-255

function printSum(){
	var sum = 0;
	for(var i = 1; i<=255; i++){
		sum += i;
	}
	console.log(sum);
	return;
}
printSum();

// iterate through array and print

function arrayPrint(arr){
	for(var i = 0; i<arr.length; i++){
		console.log(arr[i]);
	}
	return;
}
array_1 = [1,2,3];
arrayPrint(array_1);

// find maximum value in array

function findMax(arr){
	var max = 0;
	for(var i=0; i<arr.length; i++){
		if(arr[i] >= max){
			max = arr[i];
		}
	}
	console.log(max);
	return;
}
array_2 = [1,2,3];
findMax(array_2);

// calculate average of array

function findAvg(arr){
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	var avg = sum/arr.length;
	console.log(sum);
	console.log(avg);
	return;
}
var array_3 = [1,2,3];
findAvg(array_3);

// make odd-only array from [1..255]

function oddOnly(arr){
	var new_array = [];
	for(var i = 0; i<arr.length; i++){
		if(arr[i] % 2 != 0){
			new_array.push(arr[i]);
		}
	}
	console.log(new_array);
	return;
}
oddOnly([1,2,3,4,5]);

// print values or array greater than given value

function printGreater(arr, y){
	for(var i = 0; i<arr.length; i++){
		if(arr[i] > y){
			console.log(arr[i]);
		}
	}
	return;
}
printGreater([1,3,5,6,7,8,9], 3);

// make new array of squared values of a given array

function squaredValues(arr){
	var new_array = [];
	for(var i=0; i<arr.length; i++){
		new_array.push(arr[i]*arr[i]);
	}
	console.log(new_array)
	return;
}

squaredValues([2,7,12]);

// replace neg values with 0

function replaceNeg(arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i] < 0){
			arr[i] = 0;
		}
	}
	console.log(arr);
	return;
}

replaceNeg([-1,8,-5,24]);

// min max avg

function minMaxAvg(arr){
	var min = 0;
	var max = 0;
	var avg = 0;
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		if(min < arr[i]){
			min = arr[i];
		}
		if(max < arr[i]){
			max = arr[i];
		}
		sum += arr[i];
	}
	avg = sum/arr.length;
	console.log(`Min = ${min}, Max = ${max}, Avg = ${avg}`)
}

minMaxAvg([2,10,20])

// shift array values

function shiftArr(arr){
	for(var i=0; i<arr.length-1; i++){
		arr[i] = arr[i+1];
	}
	arr[arr.length-1] = 0;
	console.log(arr);
}
shiftArr([1,5,8,10])

// replace negative numbers with string

function numToString(arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i] < 0){
			arr[i]='dojo';
		}
	}
	console.log(arr);
}
numToString([-2,5,-1,3]);

// create array of random numbers

function randArr(y){
	var new_array = [];
	for(var i=1; i<=y; i++){
		var rand_num = Math.floor(Math.random()*100+1);
		new_array.push(rand_num);
	}
	console.log(new_array);
}
randArr(5);

// switch two values in an array

function switchTwo(arr){
	var temp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length-1] = temp;
	console.log(arr);
}
switchTwo([1,2,3,4,5]);

// reverse an array

function revArray(arr){
	for(var i=0; i<=arr.length/2; i++){
		var temp = arr[i];
		arr[i] = arr[arr.length-i-1];
		arr[arr.length-i-1] = temp;
	}
	console.log(arr);
}
revArray([1,2,3,4]);
revArray([1,2,3,4,5]);

// insert value x into index y

function intoArray(arr, val, index){
	arr.push(0);
		for(var i=arr.length-1; i>index; i--){
			arr[i] = arr[i-1];
		}
	arr[index] = val;
	arr.pop();
	console.log(arr);
}
intoArray([1,2,3,5,6,7,8], 4, 3);

// remove negatives from array

function removeNeg(arr){
	for(var i=0; i<arr.length;i++){
		if(arr[i] < 0){
			for(var j=i; j<arr.length;j++){
				arr[j] = arr[j+1]
			}
			arr.pop();
		}
	}
	console.log(arr);
}
removeNeg([-1,2,-3,3,4,5]);