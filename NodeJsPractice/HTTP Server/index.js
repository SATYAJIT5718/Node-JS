const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from server");
});
server.listen(8080, "127.0.0.1", () => {
  console.log("listening to the port number 8080");
});
