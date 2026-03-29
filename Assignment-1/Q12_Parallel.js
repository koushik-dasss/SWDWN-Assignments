const task  = (id,time) => new Promise(res => setTimeout(() => {
    console.log(`Finished Task ${id}`);
    res();
},time));
async function run(){
    console.log("Parallel Time");
    //Both the tasks with start at the same time getting executed 
    await Promise.all([
        task(1,1000),
        task(2,1000)
    ]);
}
run();