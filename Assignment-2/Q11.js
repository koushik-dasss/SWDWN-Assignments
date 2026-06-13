const fs = require('fs');
const zlib = require('zlib');
const inputFile = process.argv[2];
const data = fs.readFileSync(inputFile);
function compress(name,method){
    const start = Date.now();
    const compressed = method(data);
    const end = Date.now();
    console.log("Algorithm: ", name);
    console.log("Original Size: ", data.length);
    console.log("Compressed Size: ", compressed.length);
    console.log("Time: ", end-start , "ms");
}
compress("Gzip", zlib.gzipSync);
compress("Deflate", zlib.deflateSync);
compress("Brotli", zlib.brotliCompressSync);


