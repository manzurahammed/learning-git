var number = [1,2,3,4,5,6,7];

//super summation calculate
function sum(n){
	var sumation = 0;
	for(i=0;i<n.length;i++){
		sumation +=n[i];
	}
	return sumation;
}
console.log(sum(number));