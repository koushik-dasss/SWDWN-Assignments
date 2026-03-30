exports.message = "Hello from B";
// Lazy loading for A
exports.getA = function(){
    return require('./Q5_a');
};
exports.printA = function() {
    const a = exports.getA();
    console.log(a.message);
};