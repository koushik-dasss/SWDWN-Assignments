const {fork} = require('child_process');
const child = fork("Q2_iii_worker.js");
child.send("Hello Child Process");
child.on("message",(msg) => {
    console.log("Message from child: ", msg);
});
