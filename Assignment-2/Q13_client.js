const net = require('net');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const algorithm = 'aes-256-cbc';
const key = crypto.createHash('sha256').update('mypassword').digest();
const iv = Buffer.alloc(16,0);
function encrypt(data){
    const cipher = crypto.createCipheriv(
        algorithm,
        key,
        iv
    );
    let encrypted = cipher.update(data , 'utf8' , 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
const client = net.createConnection(
    {port : 5000},
    () => {
        console.log('Connected to Server');
        const files = ['sample1.txt' , 'sample2.txt'];
        files.forEach((file,index) => {
            const content = fs.readFileSync(file,'utf8');
            const encryptedContent = encrypt(content);
            const packet = {
                fileId : index + 1 ,
                fileName : file,
                content : encryptedContent
            };
            client.write(JSON.stringify(packet));
        });
    }
);
client.on('end' , () => {
    console.log("Disconnected from Server");
});