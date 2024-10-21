//Access modifiers change the visibility of the properties and methods of a class. 
//TypeScript provides three access modifiers:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//private
//protected
//public
//----------------------------------------------------------------------------------------------------------------------
//private modifier
//The private modifier limits the visibility to the same class only.........inside
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('153-07-3130', 'John', 'Doe');
//console.log(person.firstName); // compile error
//public modifier
//The public modifier allows class properties and methods to be accessible from all locations......both side
var Person2 = /** @class */ (function () {
    function Person2(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person2;
}());
var person2 = new Person('153-07-3130', 'abi', 'rami');
console.log(person2);
// protected modifier
//The protected modifier allows properties and methods of a class to be accessible within the same class and subclasses
var Person4 = /** @class */ (function () {
    function Person4(is_student, firstName, lastName) {
        if (is_student === void 0) { is_student = true; }
        this.is_student = is_student;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person4.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person4;
}());
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass(firstName, lastName, is_student) {
        if (is_student === void 0) { is_student = true; }
        return _super.call(this, is_student, firstName, lastName) || this; // Call the parent constructor
    }
    DerivedClass.prototype.getInfo = function () {
        return this.is_student;
    };
    return DerivedClass;
}(Person4));
// Create an instance of DerivedClass and log the result
var derived = new DerivedClass("abi", "ram", true);
console.log(derived.getInfo()); // This will print: true
