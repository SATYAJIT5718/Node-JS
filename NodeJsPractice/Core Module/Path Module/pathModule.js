const path = require("path");

const pathDir = path.dirname(
  "/Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module/pathModule.js",
);
console.log("pathDir:-", pathDir);
//o/p:- athDir:- /Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module

const extensionInfo = path.extname(
  "/Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module/pathModule.js",
);
console.log("extensionInfo:-", extensionInfo);
// o/p:- extensionInfo:- .js

const fileName = path.basename(
  "/Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module/pathModule.js",
);
console.log("fileName:-", fileName);
// o/p:- fileName:- pathModule.js

const filePath = path.parse(
  "/Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module/pathModule.js",
);
console.log("filePath:-", filePath);
// o/p:- filePath:- {
//   root: '/',
//   dir: '/Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module',
//   base: 'pathModule.js',
//   ext: '.js',
//   name: 'pathModule'
// }

console.log("filePath name:-", filePath.name);
// o/p:- filePath name:- pathModule

console.log("filePath base:-", filePath.base);
// o/p:- filePath base:- pathModule.js

console.log("filePath extension:-", filePath.ext);
//o/p:- filePath extension:- .js

console.log("filePath dir:-", filePath.dir);
//o/p:- filePath dir:- /Users/satyajit/Documents/Node Js./NodeJsPractice/Core Module/Path Module
