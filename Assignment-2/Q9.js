class TaskQueuePC{
    constructor(concurrency){
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }
    runTask(task){
        return new Promise((resolve,reject) => {
            const executeTask = () => {
                this.running++;
                Promise.resolve(task())
                       .then((result) => {
                           resolve(result);
                       })
                       .catch((err) => {
                           reject(err);
                       })
                       .finally(() => {
                           this.running--;
                           if(this.queue.length > 0){
                             const next = this.queue.shift();
                             next();
                           }
                       });
            };
            if(this.running < this.concurrency){
                executeTask();
            }else{
                this.queue.push(executeTask);
            }
        });
    }
}
const delay = (ms) => new Promise(res => setTimeout(res, ms));
async function main() {
    const q = new TaskQueuePC(2);
    console.log("Queue initialized. Max concurrency: 2\n");
    const tasks = [1, 2, 3, 4].map(id => async () => {
        console.log(`[Start] Task ${id} entering execution slot.`);
        await delay(2000); 
        console.log(`[Done]  Task ${id} finished.`);
        return `Data from Task ${id}`;
    });
    console.log("Adding all 4 tasks to the queue simultaneously...");
    const promises = tasks.map(t => q.runTask(t));
    const results = await Promise.all(promises);
    console.log("\nAll tasks completed successfully!");
    console.log("Results Array:", results);
}
main();
