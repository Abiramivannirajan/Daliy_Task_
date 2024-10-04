// struture of class
//A class can include
//constructor
//properties
//methods
var employee11 = /** @class */ (function () {
    function employee11() {
        this.name = "abi";
    }
    return employee11;
}());
var employee = new employee11();
console.log(employee.name);
//The constructor method is a special method:
//It has to have the exact name "constructor"
//It is executed automatically when a new object is created
//It is used to initialize object properties
//example
var person33 = /** @class */ (function () {
    function person33() {
    }
    //method
    person33.prototype.display = function () {
        console.log(this.personid);
        console.log(this.personname);
        console.log(this.personno);
    };
    return person33;
}());
var newperson = new person33(); // object creation
newperson.personid = 105;
newperson.personname = "abi";
newperson.personno = 11;
newperson.display();
