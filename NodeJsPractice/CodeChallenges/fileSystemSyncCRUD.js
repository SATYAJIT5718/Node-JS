// CRUD operation with FS module - Synchronous method:-

//1.create a folder by fs module.
//2.create file and add content by fs module
//3.update the file content by fs module
//4.read the file content without buffer data
//5.rename the file
//6.delete the file
//7.delete the folder

const fs = require("fs");

fs.mkdir("SynchronousChallenge", () => {});
fs.writeFile(
  "SynchronousChallenge/SyncFileSystem.text",
  "my First line",
  (err, data) => {
    console.log("file created successfully");
  },
);
fs.appendFile(
  "SynchronousChallenge/SyncFileSystem.text",
  "\n my 2nd line",
  (err, data) => {
    console.log("2nd line inserted succesfully");
  },
);
fs.readFile("SynchronousChallenge/SyncFileSystem.text", (err, data) => {
  console.log("file buffer data :", data);
});
fs.readFile(
  "SynchronousChallenge/SyncFileSystem.text",
  "utf-8",
  (err, data) => {
    console.log("file string data :", data);
  },
);
fs.rename(
  "SynchronousChallenge/SyncFileSystem.text",
  "SynchronousChallenge/SyncFileSystems.text",
  () => {
    console.log("file named successfully");
  },
);
fs.unlink("SynchronousChallenge/SyncFileSystems.text", (err) => {
  console.log("file deleted successfully");
  console.log("err", err);
});

//to delete folder :-
fs.rmdir("SynchronousChallenge", (err, data) => {
  console.log("folder deleted success fully");
});
