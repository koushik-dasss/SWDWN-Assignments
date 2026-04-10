const fs = require('fs');
const path = require('path');
function recursiveFind(dir,keyword,cb){
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
                    recursiveFind(filePath,keyword,(err,res) => {
                        results = results.concat(res);
                        if(!--pending){
                            cb(null,results);
                        }
                    });
                }else{
                    if(file.includes(keyword)){
                        results.push(filePath);
                    }
                    if(!--pending){
                        cb(null,results);
                    }
                }
            });
        });
    });
}
recursiveFind('./','.js',(err,results) => {
    if(err){
        throw err;
    }
    console.log('Found files: ', results);
});