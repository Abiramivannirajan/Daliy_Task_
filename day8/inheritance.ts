
//A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.
class property1{
    firstName:string;
    lastName:string;
    age:number;

  
constructor( firstName: string, lastName: string , age: number) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age=age;

}
    getId(){
         return ` ${this.firstName} ${this.lastName},${this.age}`;
    }
}
let Pro1 = new property("nith","abi",90);
console.log(Pro.getId());

// example:
    
// Base class
class Animal1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

// Derived class
class Dog extends Animal1 {
    // Overriding the speak method
    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

// Another derived class
class Cat extends Animal1 {
    // Overriding the speak method
    speak(): void {
        console.log(`${this.name} meows.`);
    }
}

// Creating instances of Dog and Cat
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.speak(); // Output: Buddy barks.
cat.speak(); // Output: Whiskers meows.

//A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.
class property1{
    firstName:string;
    lastName:string;
    age:number;

  
constructor( firstName: string, lastName: string , age: number) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age=age;

}
    getId(){
         return ` ${this.firstName} ${this.lastName},${this.age}`;
    }
}
let Pro1 = new property("nith","abi",90);
console.log(Pro.getId());

// example:
    
// Base class
class Animal1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

// Derived class
class Dog extends Animal1 {
    // Overriding the speak method
    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

// Another derived class
class Cat extends Animal1 {
    // Overriding the speak method
    speak(): void {
        console.log(`${this.name} meows.`);
    }
}

// Creating instances of Dog and Cat
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.speak(); // Output: Buddy barks.
cat.speak(); // Output: Whiskers meows.


