function gf(a,b,n){


	if(n==0){return a;}
	if(n==1){return b;}

	var prev,prevBefore;
	prevBefore = a;
	prev = b;

	var tmp=0;

	for(var i=2;i<=n;i++){
		tmp = (prev + prevBefore)%100000007;
		prevBefore = prev;
		prev = tmp;
	console.log(tmp);
	} 


	return tmp%1000000007;
}

console.log(gf(3,4,30));
