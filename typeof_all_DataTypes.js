let x="thing";
console.log("1. The data type here is "  + typeof x);		// returns string

let n1=45;
console.log("2. The data type here is " + typeof n1);		// returns number

let jumbo;
console.log("3. The data type here is " + typeof jumbo);	// returns undefined

console.log('The data type of a not defined variable i.e,  jackk + is always ' + typeof jackk);		// returns undefined

let t=null;
console.log("4. The data type here is " + typeof t);		// returns object

let b2=true;
console.log("5. The data type here is " + typeof b2);		// returns boolean

let r=4, textSample="jazbaa";
console.log(`6. The output is ${4/textSample}`);
console.log('7. But the data type here is ' + typeof (4/textSample) );			// returns number

let c1=45, c2=0;
let c3=c1/c2;
console.log('8. The result is ' + c3);
console.log('9. But the data type here is ' + typeof c3);		// returns number

let largeNumber = 2345n;
console.log(largeNumber);
console.log('10. The data type here is ' + typeof largeNumber);		// returns bigint

let sym = Symbol();
console.log('11. The data type here is ' + typeof sym);			// returns symbol


let fn = function(s1, s2){
	return (s1+s2)/s1*s2 ;
}
console.log('12. The data type here is ' + typeof fn);			// return function


let arr = [3, 'io'];
console.log('13. The data type here is ' + typeof arr);			// return object

let batman = {
	firstName: "bruce",
	guests: ['rachel', 'harvey', 'gordon']
};
console.log('14. The data type here is '+ typeof batman);		// return object


