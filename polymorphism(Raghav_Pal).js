class Animal{
    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(this.name, 'eats it\'s food');        
    }
}

const al = new Animal('Dog');
al.eats();                            // prints Dog eats it's food (old way, instead use a child class)

class Horse extends Animal{

    /* child class constructor is not required to write as long as there is no new variable or a parameter declared inside child class constructor, instead used super.eats() under non-static eats() fn below

    constructor(name){  
        super(name);
    }                               */
    
    eats(){
        super.eats();       // used super keyword to call parent/base class non-static method, prints Chetak eats it's food
        
        // console.log(this.name, 'eats it\s cheakpeas');    // commented as it is a good practice to write return statment inside a fn()

        return this.name + ` eats it's cheakpeas`;           
    }
}

// creating object of child class Horse
const ctk = new Horse('Chetak');
// chetak.eats();

console.log(ctk.eats() );                        // prints Chetak eats its cheakpeas


















