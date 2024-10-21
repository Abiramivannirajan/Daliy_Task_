//Getters allow you to retrieve the value of a property.
//Setters allow you to set or modify the value of a property.
var Per = /** @class */ (function () {
    function Per(name) {
        this._name = name;
    }
    Object.defineProperty(Per.prototype, "name", {
        // Getter for name
        get: function () {
            return this._name;
        },
        // Setter for name
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Per;
}());
// Usage
var p = new Per("abi");
console.log(p.name); // Using the getter: Outputs "Abi"
p.name = "vidhya"; // Using the setter to change the name
console.log(p.name); // Outputs "vidhya"
