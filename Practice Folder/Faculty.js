const employee = require("./Employee");
class Faculty{
    constructor(facultyName,subject){
        this.facultyName = facultyName;
        this.subject = subject;
    }
    display(){
        console.log(employee.showDetails());
        console.log(`Faculty Name: ${this.facultyName}, Subject: ${this.subject}`);
    }
}
const f1 = new Faculty("Roman Reigns","Node.JS");
f1.display();