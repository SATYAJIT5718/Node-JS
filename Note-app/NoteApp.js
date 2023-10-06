const fs = require("fs");

// To create new file or updated all content of the existing file"
// fs.writeFileSync("note.txt", "This is 2nd text");

//To updated existing file with old content
fs.appendFileSync("note.txt", " New line added from appendFileSync");
