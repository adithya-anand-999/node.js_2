//os is a built is module as it does not require a file path and you dont have to install before hand
const os = require('os')

console.log(`System uptime: ${os.uptime()}`);


const currOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currOS);
