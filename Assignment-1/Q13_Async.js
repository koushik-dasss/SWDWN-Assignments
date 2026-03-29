const async = require('async');
async.series([
    cb => { console.log("1"); cb();} ,
    cb => { console.log("2"); cb();}
]);
