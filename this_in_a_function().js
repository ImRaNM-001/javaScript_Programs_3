let person = {
  firstName  : "John",
  lastName   : "Doe",
  id     : 5566,
  myFunction : function() {
    return this;						// It means the method will return the object it belongs to.
  }
};
console.log(person.myFunction());