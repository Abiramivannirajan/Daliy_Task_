//interface only work with object:
 interface employee{
    name: string;
    age: number;
    employee:number;
 }
 const Emp:employee={
    name:"abi",
    age:20,
    employee:2,
 }
 console.log(Emp);


 //Extending interface

 interface emp extends employee{
    phone:number


 }
 const e:emp={
     name:"abi",
    age:33,
    employee:222,
    phone:12345678


 }
 console.log(e);