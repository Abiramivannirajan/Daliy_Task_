// syntax switch ( expression ) {
 {
   //case value1:
    // statement 1
    //break;
//case value2:
    // statement 2
   // break;
//case valueN:
    // statement N
    //break;
//default: 
    // 
   // break;

}
//The switch statement is used to check for multiple values and executes sets of statements for each of those values. A switch statement has one block of code corresponding to each value and can have any number of such blocks. When the match to a value is found, the corresponding block of code is executed

//EXAMPLE1

let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}

let dayofweek="abi";
 switch(dayofweek){
    case "sunday":
        console.log("sunday");
        break;
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "wednesday":
        console.log("wednesday");
        break;
    case "thursday":
        console.log("thursday");
        break;
    case"friday":
        console.log("friday");
        break;
    case"saturday":
        console.log("saturday");
        break;
    default:
        console.log("wrong");
        
 }


 //grouping switch case
// change the month and year
let month = 2,
year = 2020;

let day = 0;
switch (month) {
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
    day = 31;
    break;
case 4:
case 6:
case 9:
case 11:
    day = 30;
    break;
case 2:
    // leap year
    if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0))
        day = 29;
    else
        day = 28;
    break;
default:
    throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);


//
let days: number = 4;

switch (days) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}

  

        
        
        
        
        
 