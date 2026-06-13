const fs = require('fs');
const zlib = require('zlib');
const inputFile = process.argv[2];
if(!inputFile){
    console.log('Please provide a filename');
    process.exit(1);
}
const outputFile = inputFile + ".gz";
const fileData = fs.readFileSync(inputFile);
const compressedData = zlib.gzipSync(fileData);
fs.writeFileSync(outputFile,compressedData);
console.log('File compressed successfully');
console.log('Compressed file: ',outputFile);

