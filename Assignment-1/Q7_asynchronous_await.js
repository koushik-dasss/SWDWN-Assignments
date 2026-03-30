function delay(){
    return new Promise(resolve =>{
        setTimeout(() => resolve("Done"),1000); // setTimeout() is non blocking 
    });
}
async function run(){
    console.log("Start");
    const result = await delay(); // await used inside async function 
    console.log(result);
    console.log("End");
}
run(); // event loop executes the asynchronous program (sync program is not exec. by event loop, exec. as per req. )