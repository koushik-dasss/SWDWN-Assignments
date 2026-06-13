const employee = require('./Employee1');
class Faculty{
    constructor(fName,sub){
        this.fName = fName;
        this.sub = sub;
    }
    display(){
        console.log(employee.showDetails());
        console.log(`Faculty Name: ${this.fName}, Subject: ${this.sub}`);
    }
}
const f1 = new Faculty('Roman Reigns','Node.JS');
f1.display();
