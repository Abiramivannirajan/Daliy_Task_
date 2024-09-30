//if_else statement
//syntax
var names = true;
if (names) {
    console.log("pass");
}
else {
    console.log("fail");
}
//x<y condition
var person8 = 90;
var person9 = 23;
if (person8 > person9) {
    console.log("success");
}
else {
    console.log("fail");
}
//odd or even
var condition = 90;
if (condition % 2 == 1) {
    console.log("odd");
}
else {
    console.log("even");
}
//eligible to vote -   >18
var Person10 = 2;
if (Person10 > 18) {
    console.log("person10 is eligiable");
}
else {
    console.log("person10 is not eligiable");
}
//ternary 
var number = 50;
var a;
a = number % 2 == 0 ? "even" : "odd";
console.log(a);
//example
var itemcount = 10;
var discount;
if (itemcount > 0 && itemcount <= 5) {
    discount = 5;
}
else if (itemcount > 5 && itemcount <= 10) {
    discount = 10;
}
else {
    discount = 15;
}
console.log("The discount ".concat(discount, "%"));
// a=78; b=90; c=89;      b is greater
var persona = 10;
var personb = 60;
var personc = 89;
if (persona > personb) {
    console.log("a is greater ");
}
else if (personb > personc) {
    console.log("b is greater");
}
else if (personc > persona) {
    console.log("c is greater");
}
