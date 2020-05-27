class Employee{

/*  name;
    age;
    baseSal;                 // commented these because of below note
    
    Note:  1. It is optional (not necessary) to declare variables at class level in JavaScript but mandatory at   TypeScript with data types or else we have to make those variables as explicitly public inside constructor.
    For JavaScript, every variable declaration comes inside either constructor or methods inside class.

    2. We don't write const, let against variables at class level for both JavaScript and TypeScript, 
        appending "let" keyword for class (global) variables gives  "SyntaxError: Unexpected identifier"

    3. (stack overflow point) In ES6 you can create classes natively, but there is no option to have class variables:

        // ES6
        class MyClass{
            const MY_CONST = 'string';                  // <-- this is not possible in ES6
            constructor(){
                this.MY_CONST;
            }
        }
        Sadly, the above won't work, as classes only can contain methods.           */

    constructor(name, age, baseSal){
        this.name = name;
        this.age = age;
        this.baseSal = baseSal;
    }

    get calFinalSal(){
        const monBonus = 1500;
        const finalSal = this.baseSal + monBonus;
        return finalSal;
        // console.log(finalSal);                // it's a good practice to avoid writing console log statement in methods and replace it with a return statement.        
    }

    get empDetails(){
        console.log('Employee: name is ' + this.name + ', age is ' + this.age + ' and salary is ' + this.calFinalSal);
    }
}                           // closing Employee class here
    
const emp1 = new Employee('Raja', 42, 55000);
emp1.empDetails;

// emp1.calFinalSal;                   // even outsider employee Raja tries to access 1st fn here i.e, calFinalSal, he still cannot see the inside code or temper it, just gets output of 56500 printed in the console just like 2nd fn () i.e, what empDetails() fn gives him.









