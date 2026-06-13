class Employee1{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    showDetails(){
        return `Employee Name: ${this.name}, Employee ID: ${this.id}`;
    }
}
module.exports = new Employee1('Koushik Das',14);