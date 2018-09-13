function factor(n){
	if(n<=0){
		return 1;
	}
	else{
		return n * factor(n-1);
	}
}


var result = factor(3);

console.log(result);