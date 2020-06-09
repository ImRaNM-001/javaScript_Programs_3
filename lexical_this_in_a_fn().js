const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,

  /* way1 of writing a fn()
  myFunction: function(){
    return this;					  // means the method will return the object it belongs to.    
  }                       */

  // way2 of writing a fn()
  myFunction(){                // Naveen writes a fn() inside a object or a class this way 
    return this;
    // console.log(this);     // nice practice to avoid console.log inside a fn(), instead use return statement
  }
};

// calling the fn()...written by Hitesh but i tend to ignore this as it's nice practice to avoid console.log inside a fn()
// person.myFunction();           

console.log(person.myFunction() );        // prints {  firstName: 'John',  lastName: 'Doe',  id: 566,  myFunction: [Function: myFunction] }
console.log('\n===========comes after 2 sec============');


// ex 2: (by codevolution video - "Typescript Tutorial - 11 - lexical 'this' ")
const employee = {
  id : 711,
  greet(){
    setTimeout( () => console.log(this.id), 2000);
  }
}; 

employee.greet();        // prints 711 (after taking a pause for 2 sec) 


/* or, ES5 way as written by him (he wrote 'var' keyword but i prefer 'const')
const employee = {
  id : 711,
  greet : function(){
    let that = this;
    setTimeout(function(){
      console.log(that.id)
      }, 1000);
    }
};

employee.greet();         // prints 711 (after taking a pause for 2 sec)      */


