// CRUD operation with FS module- Asynchronous method :-

//1.create a folder by fs module.
//2.create file and add content by fs module
//3.update the file content by fs module
//4.read the file content without buffer data
//5.rename the file
//6.delete the file
//7.delete the folder

const fs = require("fs");
fs.mkdirSync("fileSystemAsyncCRUD");
fs.writeFileSync("fileSystemAsyncCRUD/challenge1.txt", "insert 1st line");
fs.appendFileSync("fileSystemAsyncCRUD/challenge1.txt", "\ninsert 2nd line");
const readFile = fs.readFileSync("fileSystemAsyncCRUD/challenge1.txt", "utf-8");
console.log("readFile", readFile);
fs.renameSync(
  "fileSystemAsyncCRUD/challenge1.txt",
  "fileSystemAsyncCRUD/challenge.txt",
);
fs.unlinkSync("fileSystemAsyncCRUD/challenge.txt");
fs.rmdirSync("fileSystemAsyncCRUD");
