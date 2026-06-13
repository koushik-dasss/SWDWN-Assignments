const http = require('http');
const zlib = require('zlib');
const path = require('path');
const fs = require('fs');
const folder = 'received_files';
fs.mkdir(folder, {recursive : true }, (err) => {
    if(err){
        console.log('Failed to create error: ',err);
    }
});
const server = http.createServer( (req,res) => {
    const fileName = req.headers['x-filename'];
    if(!fileName){
        res.statusCode = 400;
        res.end('Filename missing');
        return;
    }
    const filePath = path.join(folder,fileName);
    const gunzip = zlib.createGunzip();
    const writeStream = fs.createWriteStream(filePath);
    gunzip.on('error', (err) => {
        console.error('Decomposition error ', err.message);
        res.statusCode = 500;
        res.end('Decomposition failed');
    })
    req.pipe(gunzip).pipe(writeStream);
    writeStream.on('finish', () => {
        res.end('OK');
    });
    req.on('error', (err) => {
        console.log(err.message);
    });
    writeStream.on('error' , (err) => {
        console.log(err.message);
    });
});
server.listen(3000 , () => {
    console.log('Server running on port 3000');
});