const fs = require('fs');
const readline = require('readline');
const stream = fs.createReadStream('crime.csv');
const rl = readline.createInterface({
    input:stream
});
rl.on('line',(line) => {
    console.log(line);
});