const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home Screen");
  } else if (req.url === "/login") {
    res.end("Welcome to Login Screen");
  } else if (req.url === "/registration") {
    res.end("Welcome to Registration Screen");
  } else {
    res.end("Page Not found");
  }
});

server.listen("8080", "127.0.0.1", () => {
  console.log("server is listening on port 8080");
});
