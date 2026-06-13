class Service{
    constructor(){
        this.count = 0;
        console.log("Current value :",this.count);
    }
    increment(){
        this.count++;
        console.log("Count :", this.count);
    }
    decrement(){
        this.count--;
        console.log("Count :", this.count);
        
    }
}
module.exports = new Service;