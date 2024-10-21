//Getters allow you to retrieve the value of a property.
//Setters allow you to set or modify the value of a property.

class Per1 {
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

    // get name(){
    //     return this.name;
    // }
}

// Usage
const p= new Per("abi");

console.log(p.name); // Using the getter: Outputs "Abi"

p.name = "vidhya";      // Using the setter to change the name
console.log(p.name); // Outputs "vidhya"
