let result;
const pend:boolean=true;
const notpend=!pend;
console.log(result);

const haserror:boolean=false;
const completed: boolean=true;

result= completed && haserror;
console.log(result);
result= completed ||  haserror;
console.log(result);