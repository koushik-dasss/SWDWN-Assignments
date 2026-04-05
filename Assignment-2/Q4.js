const fs = require('fs');
fs.writeFileSync('file1.txt','Hello from File 1\n');
fs.writeFileSync('file2.txt','Hello from File 2\n');
function concatFiles(...args){
    const callback = args.pop();
    const dest = args.pop();
    const files = args;
    fs.writeFileSync(dest, ''); // destination file clearance (idempotency)
    let index = 0;
    function writeNext(){
        if(index === files.length){
            return callback();
        }
        fs.readFile(files[index],(err,data) =>{
            if(err){
                return callback(err);
            }
            fs.appendFile(dest,data,(err) => { // state of file persists between the runs (everytime the combination content increases)
                if(err){
                    return callback(err);
                }
                index++;
                writeNext();
            });
        });
    }
    writeNext();
}
concatFiles('file1.txt','file2.txt','combined.txt',(err) => {
    if(err){
        console.log("Error: ", err);
    }else{
        console.log("Combined the file1.txt and file2.txt are combined inside the combined.txt");
        console.log("Content of combine.txt : ");
        console.log(fs.readFileSync('combined.txt','utf8'));
    }
});