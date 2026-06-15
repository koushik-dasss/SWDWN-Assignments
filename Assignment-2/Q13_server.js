const net = require('net');
const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes-256-cbc';
const key = crypto.createHash('sha256').update('mypassword').digest();
const iv = Buffer.alloc(16,0);
function decrypt(data){
    const decipher = crypto.createDecipheriv(
        algorithm,
        key,
        cv
    );
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data' , (data) => {
        const message = JSON.parse(data.toString());
        const fileId = message.fileId;
        const fileName = message.fileName;
        const encryptedContent = message.content;
        const decryptedContent = decrypt(encryptedContent);
        const outputFile = `received_${fileId}_${fileName}`;
        fs.writeFileSync(outputFile,decryptedContent);
        console.log(`Received File: ${outputFile}`);
    });
    socket.on('end' , () => {
        console.log('Client Disconnected');
    });
});
server.listen(5000 , () =>{
    console.log('Server running on port 5000');
});
