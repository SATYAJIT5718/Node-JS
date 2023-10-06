// CRUD operation with FS module :-

//1.create a folder by node.js
//2.create file and add content by node.js
//3.update the file content in node.js
//4.read the file content without buffer data
//5.rename the file
//6.delete the file
//7.delete the folder

const fs = require("fs");
fs.mkdirSync("fileSystemCRUD");
fs.writeFileSync("fileSystemCRUD/challenge1.txt", "insert 1st line");
fs.appendFileSync("fileSystemCRUD/challenge1.txt", "\ninsert 2nd line");
const readFile = fs.readFileSync("fileSystemCRUD/challenge1.txt", "utf-8");
console.log("readFile", readFile);
fs.renameSync("fileSystemCRUD/challenge1.txt", "fileSystemCRUD/challenge.txt");
fs.unlinkSync("fileSystemCRUD/challenge.txt");
fs.rmdirSync("fileSystemCRUD");
