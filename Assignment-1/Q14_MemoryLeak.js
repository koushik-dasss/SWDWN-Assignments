let arr =[];
setInterval(() => {
    arr.push(new Array(1000000).fill("*")); // every 100ms , a massive size of array is added to global "arr" (memory leak)
},100);  