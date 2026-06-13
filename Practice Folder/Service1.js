class Service1{
    constructor(){
        this.count = 0;
        console.log(this.count);
    }
    increment(){
        this.count++;
        console.log(this.count);
    }
    decrement(){
        this.count--;
        console.log(this.count);
    }
}
module.exports = new Service1();