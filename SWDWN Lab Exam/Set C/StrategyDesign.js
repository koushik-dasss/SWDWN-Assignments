class SaveStrategy{
    save(data){
        throw new Error("Save method must be implemented");
    }
}
class JSONStrategy extends SaveStrategy{
    save(data){
        return JSON.stringify(data,null,2);
    }
}
class TextStrategy extends SaveStrategy{
    save(data){
        return Object.entries(data).map(([key,value]) => `${key} : ${value}`).join("\n");
    }
}
class Config{
    constructor(data){
        this.data = data;
        this.strategy = null;
    }
    setStrategy(strategy){
        this.strategy = strategy;
    }
    save(){
        if(!this.strategy){
            throw new Error("No Strategy Set.")
        }
        return this.strategy.save(this.data);
    }
}
const configData = {
    appName : "MyApp",
    version : "1.0.2",
    port : 3000
};
const config = new Config(configData);
config.setStrategy(new JSONStrategy());
console.log("JSON Output: \n" , config.save());
config.setStrategy(new TextStrategy());
console.log("Text Output: \n" , config.save());


