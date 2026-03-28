class Service{
    constructor(){
        this.count = 0;
    }
    increment(){
        this.count++;
        console.log("Count: ", this.count);
    }
}
module.exports = new Service();