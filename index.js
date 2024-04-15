// Use the require Keyword to include the http module 
// This module allows the node to tranfer data over the HTTP protocol used by the internet
const http = require('http');
//Define the location of the server, in this case, it is a local server
const hostName = '127.0.0.1';
// Define the port of the server
const port = 3000;

// Create server allows you to define how the serve will behave
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color:red" >Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.end();
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)
})