let a = +prompt('Enter a');
let b = +prompt('Enter b');
let c = +prompt('Enter c');
if (isNaN(a)||isNaN(b)||isNaN(c)||!a||!b||!c||!Number.isInteger(a)||!Number.isInteger(b)||!Number.isInteger(c)){
	console.log('Invalid input data');
} else if ( a<=0 || b<=0 || c<=0 ){
	console.log('A triangle must have 3 sides with a positive definite length ');
} else if(a+b<c||a+c<b||b+c<a){
	console.log('Triangle doesn’t exist');
} else if(a===b && b===c){
	console.log('Equilateral triangle');
} else if(a===b || b===c || a===c){
	console.log('Isosceles triangle');
} else if( a!==b && b!==c && c!==a){
	console.log('Scalene triangle');
}