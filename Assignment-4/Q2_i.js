class Boat{
    constructor(builder){
        this.hasMotor = builder.hasMotor;
        this.motorCount = builder.motorCount;
        this.hullColor = builder.hullColor;
    }
}
class BoatBuilder{
    constructor(){
        this.hasMotor = false;
        this.motorCount = 0;
        this.hullColor = "White";
    }
    setMotor(hasMotor){
        this.hasMotor = hasMotor;
        return this;
    }
    setMotorCount(count){
        this.motorCount = count;
        return this;
    }
    setHullColor(color){
        this.hullColor = color;
        return this;
    }
    build(){
        return new Boat(this);
    }
}
const boat = new BoatBuilder().setMotor(true).setMotorCount(2).setHullColor("Blue").build();
console.log(boat);
