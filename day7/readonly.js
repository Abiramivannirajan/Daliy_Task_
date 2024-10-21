// struture of class
//A class can include
//constructor
//properties
//methods
var employee1 = /** @class */ (function () {
    function employee1() {
        this.name = "abi";
    }
    return employee1;
}());
var employee = new employee1();
console.log(employee.name);
//The constructor method is a special method:
//It has to have the exact name "constructor"
//It is executed automatically when a new object is created
//It is used to initialize object properties
//example
var person1 = /** @class */ (function () {
    function person1() {
    }
    //method
    person1.prototype.display = function () {
        console.log(this.personid);
        console.log(this.personname);
        console.log(this.personno);
    };
    return person1;
}());
var newperson = new person1(); // object creation
newperson.personid = 105;
newperson.personname = "abi";
newperson.personno = 11;
newperson.display();
