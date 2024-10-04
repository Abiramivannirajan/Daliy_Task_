// basic of typeinterface
let counter:number = 42; 
let greeting:string = "Hello, world!"; 
console.log(counter);
console.log(greeting);



//Function Parameters and Return Types

function multiply(x: number, y: number) {
    return x * y; 
}
const result = multiply(5, 10);


//Best Common Type Algorithm
let items = [1, 2, 3, null]; 
let mixedArray = [1, "hi", false]; 
console.log(items);
console.log(mixedArray);


// Complex Objects
const person1 = {
    name: "abi",
    age: 23,
    hobbies: ["cooking", "dancing"]
};
console.log( person1);

