// working with os built in module
const os = require('os');
console.clear();
var freeMemory = os.freemem();
var totalMemory = os.totalmem();
console.log("freeMemory = " + freeMemory);
console.log("totalMemory = " + totalMemory);
console.error("hostName = " + os.hostname());