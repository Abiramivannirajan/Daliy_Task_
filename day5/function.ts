//void
//return
// take parameters


// function named
function names(){
    console.log(" hello world");//0 param
}
names();


function add(a:number,b:number){//2 param
    console.log(a+b);//30
    
}
add(40,30);//call by value



function calnumber(a: number, b: number,c:number):number{
    let total:number=a+b-c;
    return total;
}
let results:number=calnumber(60,66,88);
console.log(result);




function target(username:string):boolean{
    if(username === "abi"){
        return true;
    }
    else if (username == "abirami"){
        return false;
    }
    else {
    console.log("username is not found "+ username);
    return true;
    
    }
}
if(target("vidhya")){
   console.log("login with abi")
}
//void type
function add6(a:number,b:number):void{//2 param
    console.log(a+b);//3// void type
}
add(39,90);
 


//2.Anonymous fuction: without name fuction --- store in a variable:
//call it using the variable name only.

// let ,var using this name
  
let person = function(){
    console.log("hello all");
    
}
person();



let sum = function(x:number,y:number):number{
   return x+y;
}
let res:number= sum(8,9);
console.log(res);// print statement 