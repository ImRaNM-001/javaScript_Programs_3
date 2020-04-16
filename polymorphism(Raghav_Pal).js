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

    // constructor(name){   // this block of code is not required to write instead used super.eats() under
    //     super(name);
    // }
    
    eats(){
        super.eats();   // used super keyword to call parent/base class non-static contents and prints Chetak eats it's food
        // console.log(this.name, 'eats it\s cheakpeas');    // commented as it is a good practice to write return statment inside a fn()

        return this.name + ` eats it's cheakpeas`;           
    }
}

const ctk = new Horse('Chetak');
// chetak.eats();
console.log(ctk.eats() );                        // prints Chetak eats its cheakpeas


















