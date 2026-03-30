const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('done' , msg => console.log(msg));
emitter.emit('done' , "Done");