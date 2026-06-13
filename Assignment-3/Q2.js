const fs = require('fs');
const zlib = require('zlib');
const inputFile = process.argv[2];
if(!inputFile){
    console.log("Please provide a filename");
    process.exit(1);
}
const outputFile = inputFile + ".gz";
const readStream = fs.createReadStream(inputFile);
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream(outputFile);
readStream.pipe(gzip).pipe(writeStream);
writeStream.on('finish', () => {
    console.log("File compressed successfully");
    console.log("Compressed file: ", outputFile);
});
readStream.on('error', (err) => {
    console.log('Read Error: ', err.message);
});
writeStream.on('error', (err) => {
    console.log('Write Error: ', err.message);
});