function fetchData(callback){
    setTimeout( () => {
        callback("Data received.");
    },1000);
}
fetchData((data) => console.log(data));