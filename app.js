const http = require("http");

const routes = require("./routes.js");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);

// localhost:3000/

// quit running Node.js server pressing CTRL + C
