
// struture of class
//A class can include
//constructor
//properties
//methods
class employee11{
    name: string="abi";

}
 const employee= new employee11();
 console.log(employee.name);

 //The constructor method is a special method:

//It has to have the exact name "constructor"
//It is executed automatically when a new object is created
//It is used to initialize object properties

//example
class  person33
{
   personid:number;//class variable
   personname:string;
   personno:number;

//method
display():void{
    console.log(this.personid);
    console.log(this.personname);
    console.log(this.personno);
    
}

}
var newperson= new person33();// object creation
newperson.personid=105;
newperson.personname="abi";
newperson.personno=11;

newperson.display();


