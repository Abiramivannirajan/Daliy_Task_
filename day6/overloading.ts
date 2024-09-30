// same function name
//diff parameter types and return type 
// number of  parameter passed are same 

function display (a:string,b:string,c:string): any{

}

function display1(a:number,b:number,c:number): any{

}
function display2(a:boolean,b:boolean,c:boolean):any{

}

// provide the implementation of the function:
function add1(a:string,b:string): string;
function add1(a:number,b:number):number;
function add1(a:boolean,b:boolean):boolean;

//need to implement with function body this only once:
function add1(a:any,b:any):any{
    return a+b;
}
let s1=add1 ("hello","world");//hello world
let s2=add1(33,33);//66
let s3=add1(true ,false);//1


console.log(s1);
console.log(s2);
console.log(s3);


//Function overloading with optional parameters
function sum8(a: number, b: number): number;
function sum8(a: number, b: number, c: number): number;
function sum8(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

