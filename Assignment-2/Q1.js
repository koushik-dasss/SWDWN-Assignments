const EventEmitter = require('events');
function createTicker(duration,callback){
    const emitter = new EventEmitter();
    let count = 0;
    const start = Date.now();
    function tick(){
        const now = Date.now();
        if(now - start >= duration){
            callback(null,count);
            return;
        }
        count++;
        emitter.emit('tick');
        setTimeout(tick,500);
    }
    setTimeout(tick,500);
    return emitter;
}   


const myDuration = 10000; // 10s duration

const ticker = createTicker(myDuration, (err, finalCount) => {
    console.log(`Done! Total ticks recorded: ${finalCount}`);
});

ticker.on('tick', () => {
    console.log("Tick...");
});