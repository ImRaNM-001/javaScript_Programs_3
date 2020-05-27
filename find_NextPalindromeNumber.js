// ES6 syntax
const nextPalindrome = (n => {
	const isPalindrome = (num => {	// first we create a callback fn() to check if a single number is a palindrome
		let forward = num.toString(), backward = [];
     		for (let index = forward.length - 1; index >= 0; index--) backward.push(forward[index]);
			backward = backward.join('');
			return forward === backward;
	} );					// fn() 2 closed
  	
	  let countUp = n + 1; 	// now creating a counter variable to increment our number (n) where we'll initialize it as n + 1 since we know we're not going to check the first numbexr, we also need a nextPalindrome variable  

  	// now we need to begin some sort of loop, perhaps a while loop will do
  	while(true){
     		if(isPalindrome(countUp) ) return countUp;
     		else countUp += 1;
  		}					// while loop closed
} );							// fn() 1 closed
console.log('The next palindrome number is', nextPalindrome(1341) );


// ES5 syntax below (untouched and raw from the internet)
function nextPalindrome1(n) 
{
 	// first we create a function to check if a single number is a palindrome
	function isPalindrome(num) 
	{
		const forward = num.toString();
		let backward = [];
     		for (let i = forward.length - 1;	i >= 0;	i--) 
     		{
			backward.push(forward[i]);
     		}
		backward = backward.join('');
		return forward === backward;
  	}

	// now let's create a counter variable to increment our number (n)
	// we'll initialize it as n + 1 since we know we're not going to check the first number  
  	let countUp = n + 1;

  	// we also need a nextPalindrome variable  
  	let nextP;
  	
  	// now we need to begin some sort of loop
  	// perhaps a while loop will do
  	while(true) 
  	{
     		if (isPalindrome(countUp) ) 
     		{
			return countUp;
     		} 
     		else 
     		{			
	 		countUp += 1;
     		}
  	}
}

const nP = nextPalindrome1(1341);
console.log('The next palindrome number is', nP);							



/* part 2					

let rev, temp, n;
function pnp (n)
{
     for (let i = n+1;   i>=n;     i++)
     {
	    temp=i;
	    rev=0;
     
	    while (temp!=0)
	    {
		rev = rev*10 + (temp%10);
		temp = temp/10;
	    }

	    if (rev == i)
	    {
		break;
	    }
     }
     return rev;
}

const fn = pnp(11);
console.log(fn);							*/





