/* part 1

let age = 30;
if(true){
	let age = 20;
}
console.log(this.age + age);			// gives value as NaN as it cannot read let value of 20	*/


// part 2
let age1 = 40;
if(true){
	let age1 = 25;
	console.log(age1);				// prints 25
}
console.log(age1);					// prints 40

// part 3
let age2 = 15;
if(true){
	let age2 = 38;
	console.log(age2);				// prints 38
}
age2 = 44;
console.log(age2);					// prints 44