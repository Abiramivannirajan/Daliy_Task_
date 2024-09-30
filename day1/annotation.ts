
//annotation (array,object,function)
//array 
let names2: string[] = ['nithu', 'kavi','jemi', 'abi', 'thirsha' ];
console.log(names2);
//var
var names1: string[] = ['nithu', 'kavi','jemi', 'abi', 'thirsha' ];
console.log(names1);

//object 
let person2: {
    name: string;
    age: number;
  };
  
  person2 = {
    name: 'seeni',
    age: 25,
  }
  console.log(person2);
//var
  var person4: {
    name: string;
    age: number;
  };
  
  person4 = {
    name: 'seeni',
    age: 25,
  }
  console.log(person4)
  //function
  let greeting1:(name:string)=>string;
  greeting1 =function(name:string){
     return`hi ${name}`;
  };
  console.log(greeting1("abiiiiiiii"));
  //
 
  
