const task = (id,time) => new Promise(res => setTimeout(() => {
    console.log(`Finished task ${id}`);
    res();
},time));
async function run() {
    console.log("Sequential Time");
    await task(1,1000); // waits for 1s 
    await task(2,1000); // waits for another 1s
}
run();