const fs = require("fs");

//To create a folder :-
fs.mkdir("SynchronousChallenge", () => {});

// To write/create the File:- (if file name is not there node.js will aumatically create the file else override the content of the file)
fs.writeFile(
  "SynchronousChallenge/SyncFileSystem.text",
  "my First line",
  (err, data) => {
    console.log("file created successfully");
  },
);

//to add new data without affecting the existing data
fs.appendFile(
  "SynchronousChallenge/SyncFileSystem.text",
  "\n my 2nd line",
  (err, data) => {
    console.log("2nd line inserted succesfully");
  },
);

// To read data from file :-
fs.readFile("SynchronousChallenge/SyncFileSystem.text", (err, data) => {
  console.log("file buffer data :", data);
});

// to get the convert the binary data to string (use utf-8)
fs.readFile(
  "SynchronousChallenge/SyncFileSystem.text",
  "utf-8",
  (err, data) => {
    console.log("file string data :", data);
  },
);

//To Rename the file:-
fs.rename(
  "SynchronousChallenge/SyncFileSystem.text",
  "SynchronousChallenge/SyncFileSystems.text",
  () => {
    console.log("file named successfully");
  },
);

//To delete a file :-
fs.unlink("SynchronousChallenge/SyncFileSystems.text", (err) => {
  console.log("file deleted successfully");
  console.log("err", err);
});

//to delete folder :-
fs.rmdir("SynchronousChallenge", (err, data) => {
  console.log("folder deleted success fully");
});
