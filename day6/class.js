//Write a  program to print your name, date of birth, and mobile number.
function personal() {
    var name = "your name";
    var dob = 'yyyy-mm-dd';
    var mobile = 123 - 234 - 2222;
}
console.log("abi");
console.log("2004/01/03");
console.log(123456789);
//Write a  program to print the following characters in reverse.
//Test Characters: 'X', 'M', 'L'
//Expected Output:
//The reverse of XML is LMX
var char = ['X', 'M', 'l'];
console.log("The reverse of xml is ".concat(char.reverse().join('')));
//Write a program to convert specified days into years, weeks and days.
//Note: Ignore leap year.
//Test Data :
//Number of days : 1329
//Expected Output :
//Years: 3
//Weeks: 33
//Days: 3
function convertDays(days) {
    var years = Math.floor(days / 365);
    days %= 365; // Remaining days after extracting years
    var weeks = Math.floor(days / 7);
    var remainingDays = days % 7;
    console.log("Years: ".concat(years));
    console.log("Weeks: ".concat(weeks));
    console.log("Days: ".concat(remainingDays));
}
// Test Data
convertDays(1329);
