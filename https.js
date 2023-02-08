const http = require("http");

const fs = require("fs");
const { readFileSync } = require("fs");

// argument 1 - request
// argument 2 - response
const PORT = 1000;
const hostname = "localhost";
console.log(__filename);
const homepage = readFileSync("./Components/home.html", "utf-8");

const server = http.createServer((req, res, next) => {
  if (req.url === "/" || req.url === "/home") {
    return res.end(homepage);
  } else if (req.url === "/about") {
    return res.end("<h1> ABOUT PAGE </h1>");
  } else if (req.url === "/contact") {
    return res.end("<h1> CONTACT PAGE </h1>");
  } else if (req.url === "/service") {
    return res.end("<h1> SERVICE PAGE </h1>");
  } else {
    return res.end("<h1> 404 Page Not Found </h1>");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`server is running on ${hostname}:${PORT}`);
});
