const fs = require('fs');
const path = require('path');
function listNestedFiles(dir,cb){
    let results = [];
    fs.readdir(dir, (err,files) => {
        if(err){
            return cb(err);
        }
        let pending = files.length;
        if(!pending){
            return cb(null,results);
        }
        files.forEach(file => {
            const filePath = path.join(dir,file);
            fs.stat(filePath, (err,stat) => {
                if(stat && stat.isDirectory()){
                    listNestedFiles(filePath,(err,res) => {
                        results = results.concat(res);
                        if(!--pending){
                            cb(null,results);
                        }
                    });
                }else{
                    results.push(filePath);
                    if(!--pending){
                        cb(null,results);
                    }
                }
            });
        });
    });
}
// (.) => running the recursive async traversal on current folder 
listNestedFiles('.', (err,allFiles) => {
    if(err){
        return console.error("Error searching files",err)
    }
    console.log("  All Nested Files found    ");
    console.log(allFiles.join('\n'));
});