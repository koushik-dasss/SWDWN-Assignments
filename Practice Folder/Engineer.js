class Engineer{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    showDetails(){
        return `Engineer name: ${this.name}, Engineer ID: ${this.id}`;
    }
}
module.exports = new Engineer('Koushik Das',14);