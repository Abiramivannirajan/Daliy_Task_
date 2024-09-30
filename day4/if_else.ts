//if_else statement
 //syntax
  let names:boolean=true;
 if(names)
    {
    console.log("pass");
 }
 else{
    console.log("fail");

 }


 //x<y condition


 let person8: number=90;
 let person9: number=23;
if(person8>person9)
    {
    console.log("success");
    }
else
{
    console.log("fail");
}


//odd or even

let condition: number=90;
if(condition%2==1)
{
    console.log("odd");

}
else{
    console.log("even");
}

//eligible to vote -   >18

let Person10:number=2;
if(Person10>18)
    {
console.log("person10 is eligiable");

}
else
{
    console.log("person10 is not eligiable");

}

//ternary 
 let number=50;
 let a;
 a=number%2==0 ? "even": "odd";
 console.log(a);
 
//example

let itemcount:number=10;
let discount;
if (itemcount>0 && itemcount<=5)
{
  discount=5;
}
else if(itemcount>5 && itemcount<=10)
{
    discount=10;
}  
else{
    discount=15;
}
   console.log(`The discount ${discount}%`);
    


// a=78; b=90; c=89;      b is greater
let persona:number=10;
let personb:number=60;
let personc:number=89;
if(persona>personb){

    console.log("a is greater ");

}
else if(personb> personc){
  console.log("b is greater");
  
}
else if(personc > persona )
{
console.log("c is greater");
}

