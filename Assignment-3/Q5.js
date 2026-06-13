const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const http = require('http');
const filename  = process.argv[2];
const host = process.argv[3];
if(!filename || !host){
    console.log('Usage: node client.js <file> <host>');
    process.exit(1);
}
const options = {
    hostname: host,
    port: 3000,
    path: '/',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Encoding': 'gzip',
        'X-Filename': path.basename(filename)
    }
};
const req = http.request(options, (res) => {
    console.log('Status Code: ', res.statusCode);
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    res.on('end', () => {
        console.log('File transmitted successfully');
    });
});
req.on('error' , (err) => {
    console.error(`Connection Error: Unable to reach ${host}:3000. Is the server running? (${err.message})`);
});
const readStream = fs.createReadStream(filename);
const gzip = zlib.createGzip();
readStream.on('error' , (err) => {
    console.error(`File Read Error: ${err.message}`);
    req.destroy();
});
gzip.on(`error` , (err) => {
    console.log(`Compression Error: ${err.message}`);    
    req.destroy();
})
readStream.pipe(gzip).pipe(req);