//class
class college{
    student: string ="abi";
    age  :number = 20;
    location :string = "madurai";
}
var anothercollege= new college();
console.log(anothercollege.student);
console.log(anothercollege.age);
console.log(anothercollege.location);
//method
class college1 {
    student: string ="abi";
    age  :number = 20;
    location :string = "madurai";
    getdetails():any {
    }
        } 
var anothercollege= new college();
//console.log(anothercollege.student);
//console.log(anothercollege.age);
//console.log(anothercollege.location);
console.log( anothercollege);
function person(arr:number[],value:number):boolean{
    for( var i=0;i<arr.length;i++){
       if(arr[i]===value){
           return true;
       }
    }
    return false;
}
    const number=[10,25,23,78];
    const value=2;
    const executes=person(number,value)
    console.log(executes)
You are a given with an array ar[] and number n. You have to print the sum of elements which are lesser than the n in the array.
Example 1:
Input:
ar = [2,3,4,1,6,7];
n = 4;
Output :
6
Explanation:
2,3,1 are the only elements which are less than 4. So 2 + 3 + 1 is 6.
Example 2:
Input:
ar = [2,4,6,5,7]
n = 2;
Output :
0
function add(arr:number[],n:number):any{
     var sum:number=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=n)
            sum=sum+arr[i]//sum0 + ar[i]2 = 2, 2+4=6  condition
    }
    return sum;
}
const number=[7,2,3,8,26];
const n=1;
const result= add(number,n)
console.log(result)
You are a given with an array ar[] and number n. You have to print the number of occurrences of n.
Example 1:
Input:
ar = [1,2,1,2,3,4,1];
n = 1;
Output :
3
Example 2:
Input:
ar = [2,2,5,5,3]
n = 3;
Output :
1
function occurrences(arr:number[],n:number):any{
    var occurrences:number=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]===n)
            occurrences=occurrences+1//0+1=1 1+1=2 
    }
return occurrences;
}
const number=[2,2,5,5,3];
const n=6;
const result=occurrences(number,n)
console.log(result);
function occurrences(arr:number[],n:number):any{
    var occurrences:number=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]===n)
            occurrences=occurrences+1//0+1=1 1+1=2 
    }
return occurrences;
}
const number=[2,2,5,5,3];
const n=6;
const result=occurrences(number,n)
console.log(result);
function occurrences(start: number, end: number, div: number): any {
    var start: number = 5;
    var endoccurrences: number = 12;
    var divoccurrences: number = 5;
    var count: number = 0;
    for (var i = start; i <= end; i++) {
        if (i % div != 0)
            count++
    }
    return count;
}
var start: number = 5;
var end: number = 12;
var div: number = 5;
var result = occurrences(start, end, div)
console.log(result);
const  start:number=1;
const  end:number=10;
const  n:number=5;
for( var i=start;i<end;i++){
    console.log(n,"%",i," Remainder: ", n%i);
}
var ns = [4, 1, 2, 3];
var s = "program";
s.slice(2, 6);
console.log(Math.max.apply(Math, ns));
var set = "hello world";
set.concat.apply(set, ["hi", "hello"]);
console.log(set);
console.log(ns.sort());
