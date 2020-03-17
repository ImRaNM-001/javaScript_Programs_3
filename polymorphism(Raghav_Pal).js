class Animal{
    
    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(this.name, 'eats it\'s food');        
    }
}

const anML = new Animal('Dog');
anML.eats();                            // prints Dog eats it's food (old way, instead use a child class)

class Horse extends Animal{

    // constructor(name){   // this block of code is not required to write instead used super.eats() under
    //     super(name);
    // }
    
    eats(){
        super.eats();   // used super keyword to call parent/base class non-static contents and prints Chetak eats it's food
        console.log(this.name, 'eats it\s cheakpeas');           // prints Chetak eats its cheakpeas
    }
}

const chetak = new Horse('Chetak');
chetak.eats();

















