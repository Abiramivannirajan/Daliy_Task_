class Per {
    public n: string;//class
}

interface Details extends Per {  //interface
    details(): void;
}

class Stu extends Per implements Details {  //implements
        details(): void {
        this.n = "abi";
        console.log(this.n);
    }
}

let object = new Stu(); 
object.details();  
