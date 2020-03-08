let largeNumber = 1234567891011121314;
console.log(largeNumber);

console.log(typeof largeNumber);
console.log( typeof (7>8) );

// -----------


let h6 = 'to';
let h7 = 90;
let h8 = h6* h7;
console.log(h8)
console.log(typeof h8);



//just checking

let batman1= {
  firstName: "Bruce",
  lastName: "Wayne", 
  secretIdentity: function() { // method
    return this.firstName + " " + this.lastName;
  }
};
console.log(batman1.secretIdentity())
let b23 = batman1.secretIdentity();
console.log(b23);
