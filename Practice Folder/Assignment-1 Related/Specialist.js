const patient = require("./Patient");
class Specialist{
    constructor(sName,dept){
        this.sName = sName;
        this.dept = dept;
    }
    display(){
        console.log(patient.showDetails());
        console.log(`Specialist Name: ${this.sName}, Specialist Department: ${this.dept}`);
    }
}
const s1 = new Specialist('Ritik Jain','Heart');
s1.display();