function myPromiseAll(promises){
    return new Promise( (resolve,reject) => {
        if(!Array.isArray(promises)){
            return reject(new TypeError("Input must be an array."));
        }
        if(promises.length == 0){
            return resolve([]);
        }
        const results = [];
        let completed = 0;
        promises.forEach( (p,i) => {
            Promise.resolve(p)
                 .then(value => {
                    results[i] = value;
                    completed++;
                    if(completed == promises.length){
                        resolve(results);
                    }
                 })
                 .catch((err) => {
                    reject(err);
                 });
        });
    }); 
}
const p1 = new Promise.resolve(10);
const p2 = new Promise((resolve) => {
    setTimeout(() => resolve(20),1000);
});
const p3 = 30;
customPromiseAll([p1,p2,p3])
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);    
    });