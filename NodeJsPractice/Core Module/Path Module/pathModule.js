const path = require("path");

const pathDir = path.dirname(
  "/Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module/pathModule.js",
);
console.log("pathDir:-", pathDir);

const extensionInfo = path.extname(
  "/Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module/pathModule.js",
);
console.log("extensionInfo:-", extensionInfo);

const fileName = path.basename(
  "/Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module/pathModule.js",
);
console.log("fileName:-", fileName);

const filePath = path.parse(
  "/Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module/pathModule.js",
);
console.log("filePath:-", filePath);
console.log("filePath name:-", filePath.name);
console.log("filePath base:-", filePath.base);
console.log("filePath extension:-", filePath.ext);
console.log("filePath dir:-", filePath.dir);
