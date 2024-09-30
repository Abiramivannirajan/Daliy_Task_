//1 to 10:
for(let i=1;i<=10;i++){
    console.log(i);//1234.....10
    //break;// 1
}
//0 2 4 6 8 10
for(let j=0; j<=10;j=j+2){
  console.log(j);//0 .. 
  
}

//for... of loop:
let numbers=[10,200,3000,40000];
for(let n of numbers){
    console.log(n);
    if(n===200){
        console.log("abi");
        break;
        
    }
}



// for...in loop:
let num=[10,200,300,4000,55555];
for(let i in num ){
    //console.log(num[i]);
    console.log(i+"=" + num[i]);
}


let info="hello world";
for(let c of info ){
    console.log(c);
}


//while loop:
//1 to 10;
let  p=1;
while(p<=10){
    console.log(p);//1
    p++;//12345.....10
}
//do while:
let d=1;
do{
    console.log(d);//123.....10
    d++;
    
}while(d<=10);

