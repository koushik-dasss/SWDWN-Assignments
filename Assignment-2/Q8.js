class TaskQueue{
    constructor(concurrency){
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }
    async runTask(task){
        while(this.running >= this.concurrency){
            await new Promise((resolve) => {
                this.queue.push(resolve);
            });
        }
        this.running++;
        try{
            const result = await task();
            return result;
        }finally{
            this.running--;
            if(this.queue.length > 0){
                const next = this.queue.shift();
                next();
            }
        }
    }
}
// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// async function startTest() {
//     const q = new TaskQueue(2); // Allows 2 tasks at a time
//     console.log("Queue started...");

//     // Create 4 dummy tasks that take 2 seconds each
//     const tasks = [1, 2, 3, 4].map(id => async () => {
//         console.log(`Task ${id} - Started`);
//         await delay(2000);
//         console.log(`Task ${id} - Completed`);
//         return `Result ${id}`;
//     });

//     // Push all tasks into the queue at once
//     const execution = tasks.map(t => q.runTask(t));
//     const results = await Promise.all(execution);
    
//     console.log("All done! Output:", results);
// }

// startTest();
const delay = (ms) => new Promise(res => setTimeout(res,ms));
async function startTest(){
    const q = new TaskQueue(2);
    console.log("Queue started....");
    const tasks = [1,2,3,4].map(id => async() => {
        console.log(`Task ${id} - Started`);
        await delay(2000);
        console.log(`Task ${id} - Completed`);
        return `Result ${id}`
    });
    const execution = tasks.map(t => q.runTask(t));
    const results = await Promise.all(execution);
    console.log("All done! Output:", results);
}
startTest();

