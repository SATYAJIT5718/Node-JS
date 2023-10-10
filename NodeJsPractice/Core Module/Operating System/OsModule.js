const os = require("os");

const freeMemory = os.freemem(); //Fee Ram
console.log("freeMemory in bytes", freeMemory); // in bytes
console.log("freeMemory in KB", `${freeMemory / 1024}`); // in KB
console.log("freeMemory in MB", `${freeMemory / 1024 / 1024}`); //in MB
console.log("freeMemory in GB", `${freeMemory / 1024 / 1024 / 1024}`); //in GB

const totalMemory = os.totalmem(); // Total Ram
console.log("totalMemory in bytes", totalMemory); // in bytes
console.log("totalMemory in KB", `${totalMemory / 1024}`); // in KB
console.log("totalMemory in MB", `${totalMemory / 1024 / 1024}`); //in MB
console.log("totalMemory in GB", `${totalMemory / 1024 / 1024 / 1024}`); //in GB

const architecture = os.arch();
console.log("operating system CPU architecture", architecture);

const networkInterface = os.networkInterfaces();
console.log("Network Interface", networkInterface);

const osVersion = os.version();
console.log("Os Version", osVersion);

const osHostName = os.hostname();
console.log("Host Name", osHostName);

const osPlatform = os.platform();
console.log("Platform", osPlatform);

const tempDir = os.tmpdir();
console.log("System temp Dir", tempDir);

const osType = os.type();
console.log("OS Type", osType);

const machine = os.machine();
console.log("Machine info", machine);
