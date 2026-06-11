async function mapAsync(iterable,callback,concurrency){
    const results = new Array(iterable.length);
    let currentIndex = 0;
    async function worker(){
        while(currentIndex < iterable.length){
            const index = currentIndex++;
            results[index] = await callback(iterable[index]);
        }
    }
    const workers = [];
    for(let i=0 ; i<concurrency ;i++){
        workers.push(worker());
    }
    await Promise.all(workers);
    return results;
}
mapAsync(
    [1,2,3,4],
    async(x) => {
        return x*2 ;
    }, 2
).then(console.log);