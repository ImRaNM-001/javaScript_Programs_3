// part 1
console.log('The numbers list are ');
let i = 0;
while(i < 5){
	console.log(i);					// prints 0 1 2 3 4 (horizontal way)
	i++;
}

console.log('--------line gap----------\n');

// part 2
let condition = true, n = 2;
while(condition){
	if(n == 3){
		condition = false;
	}
	console.log(n);						// prints 2 3 (horizontal way)
	n++;
}

console.log('--------line gap----------\n');

// part 3
let condition1 = true, k = 3;
while(condition1){
    if(k <= 4){
        condition1 = false;
    }
    console.log(k);								// prints 3
    k++;
} 