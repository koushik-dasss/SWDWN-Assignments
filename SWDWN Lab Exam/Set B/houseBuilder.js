class House{
    constructor(roomCount , hasGarage , paintColor){
        this.roomCount = roomCount;
        this.hasGarage = hasGarage;
        this.paintColor = paintColor;
    }
}
class HomeBuilder{
    constructor(){
        this.roomCount = 0;
        this.hasGarage = false;
        this.paintColor = "";
    }
    setRoomCount(roomCount){
        this.roomCount = roomCount;
        return this;
    }
    setGarage(hasGarage){
        this.hasGarage = hasGarage;
        return this;
    }
    setPaintColor(paintColor){
        this.paintColor = paintColor;
        return this;
    }
    build(){
        return new House(
            this.roomCount,
            this.hasGarage,
            this.paintColor
        );
    }
}
const house1 = new HomeBuilder().setRoomCount(3).setGarage("true").setPaintColor("White").build();
const house2 = new HomeBuilder().setRoomCount(5).setGarage("false").setPaintColor("Blue").build();
console.log('House 1 : ');
console.log(house1);
console.log('House 2 : ');
console.log(house2);



