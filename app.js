// node server

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});

server.listen(3000);

// localhost:3000

// quit running Node.js server pressing CTRL + C
