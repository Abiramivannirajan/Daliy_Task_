//optional params:
 function information(firstname: string,age?:number):string{
    return firstname +" "+age;
 }
 console.log(information('abi'));//abi undefined
console.log("tom",39);// tom 39
    

//default params:

function detail(name : string, message: string="welcome"): string{
    return message +' '+name;

}
console.log(detail('abirami'));
console.log(detail('abirami','hi'));
console.log(detail('abirami', undefined));
