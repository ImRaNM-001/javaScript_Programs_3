const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,

  // way1 of writing a fn()
  // myFunction: function(){
  //   return this;						                // It means the method will return the object it belongs to.    
  // }

  // way2 of writing a fn()
  myFunction(){                             // naveen writes a fn() inside a object or a class this way 
    return this;
    // console.log(this);                 // nice practice to avoid console.log inside a fn(), instead use return statement
  }
};

// person.myFunction();                     // written by Hitesh but i tend to ignore this as it's ice practice to avoid console.log inside a fn()
console.log(person.myFunction() );