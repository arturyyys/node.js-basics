const http = require("http");

const routes = require("./routes.js");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);

// localhost:3000/

// quit running Node.js server pressing CTRL + C

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if ( url === '/'){
//         res.write('<html>');
//         res.write('<head><title>users</title></head>');
//         res.write('<body>');
//         res.write('<h4>Hi everyone, Stephen speaking!</h4>');
//         res.write('<ul><li>User one</li><li>User two</li><li>User three</li><li>User four</li></ul>')
//         res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button>Submit</button></form>');
//         res.write('</body>')
//         res.write('</body>');
//         return res.end();
//     }

//     if (url === '/create-user' && method === 'POST'){
//         const body = [];

//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             console.log(message);
//             return res.end()
//         })
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.end();
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// })
