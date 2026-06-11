const { Readable } = require("stream");
const stream = new Readable({
    read() {}
});
let count = 0;
setInterval( () => {
    stream.push(`Frame ${count++}\n`);
},500);
stream.pipe(process.stdout);