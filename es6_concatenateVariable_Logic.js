let msg = '';
// let msg;					// just initialized msg not assigned any value so data type would be 'undefined'
// let msg=null;		// initalized msg as null, works fine
const v1=3;
const v2=6;

const res = v1/v2;

if(res === 0.25){
	msg=`calculation passed and is = ${res}`;			// used backticks found under esc key
}
else {
	msg=`calculation failed as result is ${res}`;
}
console.log(msg);
console.log(`h'i`);				// i tested and found we can use backticks to represent a string instead of single quotes.