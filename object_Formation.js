//part1
/*let obj = new Object ({name: 'bruce' , age: 40});
obj['2 sur name'] = 'wayne';

console.log(obj.age);
console.log(obj['name'] );
console.log(obj['2 sur name'] );*/


// part 2
let myObj = new Object(),
 	str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';

myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';

myObj['']               = 'Even an empty string';

console.log(myObj);


// part3
let obj3 = new Object();
	name = 'jack',
	city = '30 MA',
	figures = 60,
	obj = new Object();

	obj3[name] 	= 'hey this is jack sparrow';
	obj3[city] = '7>8';

	console.log(obj3);			// prints empty object {}