const {
  getUserInfo,
  getUserName,
  add,
  sub,
  mult,
  div,
} = require("./ownModules");

const userName = getUserName("Satya JEET");
console.log("userName", userName);

const userInfo = getUserInfo("I am a full stack developer");
console.log("user Info", userInfo);

console.log("addition", add(5, 10));
console.log("subs", sub(10, 2));
console.log("mult", mult(10, 2));
console.log("subs", div(10, 2));
