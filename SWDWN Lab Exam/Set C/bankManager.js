class BankManager{
    constructor(){
        this.banks = [];
    }
    addBank(name){
        this.banks.push(name);
    }
    getBanks(){
        return this.banks;
    }
}
module.exports = new BankManager();
module.exports.Bank = new BankManager();