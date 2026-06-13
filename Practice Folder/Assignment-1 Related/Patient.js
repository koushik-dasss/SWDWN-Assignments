class Patient{
    constructor(pName,pAge,mHistory){
        this.pName = pName;
        this.pAge = pAge;
        this.mHistory = mHistory;
    }
    showDetails(){
        return `Patient Name: ${this.pName}, Patient Age: ${this.pAge}, Patient History: ${this.mHistory}`;
    }
}
module.exports = new Patient('Koushik Das',22,"Nothing");