function delaySync() {
    const start = Date.now();
    while(Date.now() - start < 1000){
        // blocking loop for 1 second 
    }
    return "Done";
}
console.log("Start");
const result = delaySync();
console.log(result);
console.log("End");


