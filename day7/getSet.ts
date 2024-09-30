<<<<<<< HEAD


//Getters allow you to retrieve the value of a property.
//Setters allow you to set or modify the value of a property.

class Per {
    private _name: string;  // Private property

    constructor(name: string) {
        this._name = name;
    }

    // Getter for name
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(newName: string) {
        this._name = newName;
    }
}

// Usage
const p= new Per("Alice");

console.log(p.name); // Using the getter: Outputs "Alice"

p.name = "Bob";      // Using the setter to change the name
console.log(p.name); // Outputs "Bob"
=======


//Getters allow you to retrieve the value of a property.
//Setters allow you to set or modify the value of a property.

class Per {
    private _name: string;  // Private property

    constructor(name: string) {
        this._name = name;
    }

    // Getter for name
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(newName: string) {
        this._name = newName;
    }
}

// Usage
const p= new Per("Alice");

console.log(p.name); // Using the getter: Outputs "Alice"

p.name = "Bob";      // Using the setter to change the name
console.log(p.name); // Outputs "Bob"
>>>>>>> 52e1289d2c1008492f730f02ce3c50229263bb19
