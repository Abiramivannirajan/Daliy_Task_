<<<<<<< HEAD
//Access modifiers change the visibility of the properties and methods of a class. 
//TypeScript provides three access modifiers:

//private
//protected
//public
//----------------------------------------------------------------------------------------------------------------------


//private modifier
//The private modifier limits the visibility to the same class only.........inside
class Person {

    private firstName: string;
    private lastName: string;
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  let person = new Person('153-07-3130', 'John', 'Doe');
//console.log(person.firstName); // compile error

//public modifier
//The public modifier allows class properties and methods to be accessible from all locations......both side

class Person2{
    public ssn: string;
    public firstName: string;
    public lastName: string;
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  let person2= new Person('153-07-3130', 'abi', 'rami');
console.log(person2); 


// protected modifier
//The protected modifier allows properties and methods of a class to be accessible within the same class and subclasses
class Person4 {
    constructor(
        protected is_student: boolean = true,
        private firstName: string,
        private lastName: string
    ) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
} 

class DerivedClass extends Person4 {
    constructor(firstName: string, lastName: string, is_student: boolean = true) {
        super(is_student, firstName, lastName); // Call the parent constructor
    }

    getInfo(): boolean {
        return this.is_student;
    }
}

// Create an instance of DerivedClass and log the result
let derived = new DerivedClass("John", "Doe",true);
console.log(derived.getInfo()); // This will print: true

=======
//Access modifiers change the visibility of the properties and methods of a class. 
//TypeScript provides three access modifiers:

//private
//protected
//public
//----------------------------------------------------------------------------------------------------------------------


//private modifier
//The private modifier limits the visibility to the same class only.........inside
class Person {

    private firstName: string;
    private lastName: string;
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  let person = new Person('153-07-3130', 'John', 'Doe');
//console.log(person.firstName); // compile error

//public modifier
//The public modifier allows class properties and methods to be accessible from all locations......both side

class Person2{
    public ssn: string;
    public firstName: string;
    public lastName: string;
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  let person2= new Person('153-07-3130', 'abi', 'rami');
console.log(person2); 


// protected modifier
//The protected modifier allows properties and methods of a class to be accessible within the same class and subclasses
class Person4 {
    constructor(
        protected is_student: boolean = true,
        private firstName: string,
        private lastName: string
    ) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
} 

class DerivedClass extends Person4 {
    constructor(firstName: string, lastName: string, is_student: boolean = true) {
        super(is_student, firstName, lastName); // Call the parent constructor
    }

    getInfo(): boolean {
        return this.is_student;
    }
}

// Create an instance of DerivedClass and log the result
let derived = new DerivedClass("John", "Doe",true);
console.log(derived.getInfo()); // This will print: true

>>>>>>> 52e1289d2c1008492f730f02ce3c50229263bb19
