//Asynchronous file module:--

const fs = require("fs");

//To create a folder :-
fs.mkdirSync("Asynchronous");

//To write/create the File:- (if file name is not there node.js will aumatically create the file else override the content of the file)
fs.writeFileSync("1stText.txt", "first file added by writeFileSyn");

//to update exisiting data on file
//here it will completly override the exsisting data/content(if file and content is there in it)
fs.writeFileSync("1stText.txt", "update the first file added by writeFileSyn");

//to add new data without affecting the existing data
fs.appendFileSync("1stText.txt", "\nadded a new line in the text file");

// To read data from file :-
const buffer_data = fs.readFileSync("1stText.txt");
console.log("buffer_data", buffer_data);
// Here it we will get a binary data formate of the file
// <Buffer 75 70 64 61 74 65 20 74 68 65 20 66 69 72 73 74 20 66 69 6c 65 20 61 64 64 65 64 20 62 79 20 77 72 69 74 65 46 69 6c 65 53 79 6e 0a 61 64 64 65 64 20 ... 129 more bytes>

// to get the convert the binary data to string (use utf-8)
console.log("buffer_data.toString(", buffer_data.toString());
const without_buffer_data = fs.readFileSync("1stText.txt", "utf-8");
console.log("without_buffer_data", without_buffer_data);

//To Rename the file:-
fs.renameSync("1stText.txt", "AsyncFileSystem.txt");

//To delete a file :-
fs.unlinkSync("AsyncFileSystem.txt");

//to delete folder :-
fs.rmdirSync("Asynchronous");
