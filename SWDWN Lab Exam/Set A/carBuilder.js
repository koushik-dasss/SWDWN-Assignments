class Car{
    constructor(hasEngine , seatCount , color){
        this.hasEngine = hasEngine;
        this.seatCount = seatCount;
        this.color = color;
    }
}
class CarBuilder{
    constructor(){
        this.hasEngine = false;
        this.seatCount = 0;
        this.color = "";
    }
    setEngine(hasEngine){
        this.hasEngine = hasEngine;
        return this;
    }
    setSeatCount(seatCount){
        this.seatCount = seatCount;
        return this;
    }
    setColor(color){
        this.color =  color;
        return this;
    }
    build(){
        return new Car(
            this.hasEngine,
            this.seatCount,
            this.color
        );
    }
}
const car1 = new CarBuilder().setEngine(true).setSeatCount(7).setColor('Black').build();
const car2 = new CarBuilder().setEngine(true).setSeatCount(5).setColor('Red').build();
console.log('Car 1: ');
console.log(car1);
console.log('Car 2 : ');
console.log(car2);


