function myPromiseAll(promises){
    return new Promise( (resolve,reject) => {
        if(promises.length == 0){
            return resolve([]);
        }
        let results = [];
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
                 .catch(reject);
        });
    }); 
}
const p1 = Promise.resolve("Task 1 done");
const p2 = new Promise( (resolve) => setTimeout(() => resolve("Task 2 Done (delayed)"),2000)); // delay of 2000ms
const p3 = 42 // non-promise value , handled by Promise.resolve(p)
myPromiseAll([p1,p2,p3])
    .then((results) => {
        console.log("All results: ",results);
    })
    .catch((err) => {
        console.error("One failed: ",err);
    });