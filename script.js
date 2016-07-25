
var arr = [1,0,2,0,0,2];
//arr = [1,5,4];
arr = [];

function process(arr){
	var sum = 0,count=0;
	for( var index of arr){
		sum += Math.pow(2,index);
	}
	console.log(sum);

	while(sum >0){
		if(sum % 2 == 1){count++;}
		sum = Math.floor(sum/2);
	}

	return count;
	
}

console.log(process(arr));
