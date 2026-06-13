const http = require('http');
const server = http.createServer( (req,res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    let count = 0;
    function sendData(){
        let shouldContinue = true;
        while(count < 100000 && shouldContinue){
            const data = `Line Number ${count}\n`;
            shouldContinue = res.write(data);
            count++;
            console.log(`Writing Line ${count} : ${shouldContinue}`);   
        }
        if(count < 100000){
            console.log('Buffer Full => Waiting for Drain Event');
            res.once('drain' , () => {
                console.log('Drain Event Triggered -> Resume Writing');
                sendData();
            });
        }else{
            res.end('All data sent successfully')
        }
    }
    sendData();
});
server.listen(3000, () => {
    console.log('Server running at port 3000');
});