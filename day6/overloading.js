// same function name
//diff parameter types and return type 
// number of  parameter passed are same 
function display(a, b, c) {
}
function display1(a, b, c) {
}
function display2(a, b, c) {
}
//need to implement with function body this only once:
function add1(a, b) {
    return a + b;
}
var s1 = add1("hello", "world"); //hello world
var s2 = add1(33, 33); //66
var s3 = add1(true, false); //1
console.log(s1);
console.log(s2);
console.log(s3);
function sum8(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
