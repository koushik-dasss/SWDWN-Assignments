exports.message = "Hello from A";
// Lazy Loading of B only when it's required 
exports.getB = function(){
    return require('./Q5_b');
};
exports.printB = function(){    
    const b = exports.getB();
    console.log(b.message);
};