const msg1 = 'It is a prime number',
msg2 = 'Not a prime number',

primeNum = num =>{
	if(num == 1) return msg2;
	else if(num == 2) return msg1;
	else if (num > 2){
		for(let count = 2;	count < num;	count++){
			if(num % count == 0) return msg2;
			else if(num == count * count) return msg2;
			else return msg1;
		}
	}
	else return msg2;			
} ;

console.log(primeNum(49) );			




/* function testPrime(num)
{
	if (num===1)
		{
			return false;			
		}
	else if (num===2)
		{
			return true;			
		}
	else
		{
			for (let i=2;	i<num;	i++)
				{
					if(num % i ===0)
						{
							return false;
						}
					else
						{
							return true;
						}
				}			
		}	
}
console.log(testPrime(50) );			*/









