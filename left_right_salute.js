function answer(str){
	var x = 0;
	var arr = str.split("");
	var left = 0, right = 0, leftover = 0;

	function check(arr, x, left, right, leftover){
		for(var i = x; i<arr.length; i++){
			if (arr[i] == ">"){
				break;
			}
		}
		for(var j = i; j<arr.length; j++){
				if(arr[j] == ">"){
					left++;
				}
				else if(arr[j] == "<"){
					right++;
				}
		}
		for(var k = arr.length-1; k<arr.length; k--){
			if(arr[k] == ">"){
				leftover++;			
			}

			else if(arr[k] == "<"){
				break;
			}
		} 
		left -= leftover;
		console.log("left = " + left);
		console.log("right = " + right);
	}

	check(arr, x, left, right, leftover);
}


answer("<>><<>>");