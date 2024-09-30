//1 to 10:
for (var i = 1; i <= 10; i++) {
    console.log(i); //1234.....10
    //break;// 1
}
//0 2 4 6 8 10
for (var j = 0; j <= 10; j = j + 2) {
    console.log(j); //0 .. 
}
//for... of loop:
var numbers = [10, 200, 3000, 40000];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var n = numbers_1[_i];
    console.log(n);
    if (n === 200) {
        console.log("abi");
        break;
    }
}
// for...in loop:
var num = [10, 200, 300, 4000, 55555];
for (var i in num) {
    //console.log(num[i]);
    console.log(i + "=" + num[i]);
}
var info = "hello world";
for (var _a = 0, info_1 = info; _a < info_1.length; _a++) {
    var c = info_1[_a];
    console.log(c);
}
//while loop:
//1 to 10;
var p = 1;
while (p <= 10) {
    console.log(p); //1
    p++; //12345.....10
}
//do while:
var d = 1;
do {
    console.log(d); //123.....10
    d++;
} while (d <= 10);
