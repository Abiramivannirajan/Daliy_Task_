//void
//return
// take parameters
// function named
function names() {
    console.log(" hello world"); //0 param
}
names();
function add(a, b) {
    console.log(a + b); //30
}
add(40, 30); //call by value
function calnumber(a, b, c) {
    var total = a + b - c;
    return total;
}
var result = calnumber(60, 66, 88);
console.log(result);
function target(username) {
    if (username === "abi") {
        return true;
    }
    else if (username == "abirami") {
        return false;
    }
    else {
        console.log("username is not found " + username);
        return true;
    }
}
if (target("vidhya")) {
    console.log("login with abi");
}
//void type
function add1(a, b) {
    console.log(a + b); //3// void type
}
add1(39, 90);
//2.Anonymous fuction: without name fuction --- store in a variable:
//call it using the variable name only.
// let ,var using this name
var person = function () {
    console.log("hello all");
};
person();
var sum = function (x, y) {
    return x + y;
};
var res = sum(8, 9);
console.log(res); // print statement 
