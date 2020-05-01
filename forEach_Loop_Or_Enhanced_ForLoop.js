const arr = ['jack', 'jill', 90, 67, 2, 'shelly'];

// printing entire array
console.log(arr[2]);							// prints 90


// printing each element of array
/* 		1. very old & long way (ES5 way)
		arr.forEach(function(elem){
		console.log(elem);
	} ); 				*/

// 2. new & shorter way (ES6 way)
arr.forEach(elem => console.log(elem) );		// prints 90 jack jill 90 67 2 shelly (vertical order)