let a = +prompt('Enter a');
let b = +prompt('Enter b');
let c = +prompt('Enter c');
if (isNaN(a)||isNaN(b)||isNaN(c)|| a===0 ||!a||!b||!c) {
	console.log('Invalid input data');
}else {
    let D=Math.pow(b,2) - 4*a*c;
	if(D > 0) {
		let x1=(-b+Math.sqrt(D))/(2*a);
		let x2=(-b-Math.sqrt(D))/(2*a);
		console.log('x1 =',Math.round(x1),'and x2 =',Math.round(x2));
	}else if(D===0) {
		let x=-b/(2*a);
		console.log('x=',x);
	}else {
		console.log('No solution ');
	}
}