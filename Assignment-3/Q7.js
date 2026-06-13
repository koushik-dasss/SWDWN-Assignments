const fs = require('fs');
const{ Readable,Transform } = require('stream');
function concatenateFiles(destination,sources){
    return new Promise((resolve,reject) => {
        const writeStream = fs.createWriteStream(destination);
        const sourceStream = Readable.from(sources);
        const transformStream = new Transform({
            objectMode: true,
            transform(file,encoding,callback){
                const readStream = fs.createReadStream(file);
                readStream.on('data',(chunk) => {
                    writeStream.write(chunk);
                });
                readStream.on('end' , () => {
                    callback();
                });
                readStream.on('error' , (err) => {
                    callback(err);
                });
            }
        });
        sourceStream.pipe(transformStream);
        transformStream.on('finish' , () => {
            writeStream.end();
        });
        writeStream.on('finish' , () => {
            resolve();
        });
        writeStream.on('error' , (err) => {
            reject(err);
        });
        transformStream.on('error' , (err) => {
            reject(err);
        });
    });
}
concatenateFiles(
    'output.txt',
    ['file3.txt','file4.txt','file5.txt']
)
.then(() => {
    console.log('Files concatenated successfully');
})
.catch((err) => {
    console.log(err.message);
});