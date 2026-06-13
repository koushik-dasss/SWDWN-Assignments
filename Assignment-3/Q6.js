const{ Readable } = require("stream");
const mountains = [
    { name: 'Everest', height: 8848 },
    { name: 'K2', height: 8611 },
    { name: 'Kangchenjunga', height: 8586 },
    { name: 'Lhotse', height: 8516 },
    { name: 'Makalu', height: 8481 }
];
const mountainStream = Readable.from(mountains);
console.log('Mountain Details:\n');
mountainStream.on('data', (mountain) => {
    console.log(
        `Mountain Name: ${mountain.name} | Height: ${mountain.height} meters`
    );
});
mountainStream.on('end' , () => {
    console.log('\nAll mountain are processed successfully');
    
});
mountainStream.on('error' , (err) => {
    console.log('Error: ', err.message);
});
