class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    showDetails(){
        return `Employee Name: ${this.name}, ID: ${this.id}`;
    }
}
module.exports = new Employee("Koushik Das",14);