const engineer = require('./Engineer');
class Manager{
    constructor(mName,domain){
        this.mName = mName;
        this.domain = domain;
    }
    display(){
        console.log(engineer.showDetails());
        console.log(`Manager Name: ${this.mName}, Domain: ${this.domain}`);
    }
}
const M1 = new Manager("Roman","CSE");
M1.display();