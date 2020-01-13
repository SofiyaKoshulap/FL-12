function convert() {
    let arr =[];
	for (let i = 0; i<arguments.length; i++) {
		if( typeof arguments[i] ==='number'){
			arr.push(arguments[i].toString());
		} else{
			arr.push(parseInt(arguments[i]));
		}
	}
	return arr;
}
convert('1', 2, 3, '4');

function executeforEach(arr,func){
	for (let i = 0; i<arr.length; i++) {
		func(arr[i]);
	}
}

function mapArray(arr,func){
	let newArr =[];
	executeforEach(arr,function (el){
		newArr.push(func(+el));

	});
	return newArr;
}
mapArray([2, '5', 8], function(el){
	return el + 3;
});

function filterArray(arr,func){
	let newArr =[];
	executeforEach(arr,function (el){
		if(func(el)){
			newArr.push(el);
		}

	});
	return newArr;
}
filterArray([2, 5, 8], function(el) { 
	return el % 2 === 0 
});

function flipOver(string){
	let str ='';
	for (let i = string.length-1; i>=0; i--) {
		str+=string[i];
	}
	return str;
}
flipOver('hey world');

function makeListFromRange(arr){
	let newArr =[];
	for (let i = arr[0]; i<=arr[1]; i++) {
		newArr.push(i);
	}
	return newArr;	
}
makeListFromRange([2, 7]);

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];
function getArrayOfKeys(arr,key){
	let newArr =[];
	executeforEach(arr,function (el){
		let obj = el;
		newArr.push(obj[key]);

	});
	return newArr;	
}
getArrayOfKeys(actors, 'name');

function substitute(arr){
	let newArr =[];
	let thirty = 30;
	mapArray(arr, function(el) {
		if( el<thirty){
			newArr.push('*');
		} else{
			newArr.push(el);
		}
	});
	return newArr;
}
substitute([58, 14, 48, 2, 31, 29]); 

const date = new Date(2019, 0, 2);
function getPastDay(date, n){
	let newDate = new Date(date);
	return newDate.getDate(newDate.setDate(newDate.getDate() - n));
}
getPastDay(date, 1); 

function formatDate(arg){
	let date = arg;
	let minutes = date.getMinutes()<10 ?'0'+date.getMinutes() : date.getMinutes();
	let hours = date.getHours()<10 ?'0'+date.getHours() : date.getHours();
	return date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate() + ' ' + hours + ':' + minutes;
}
formatDate(new Date('6/15/2018 09:15:00'));