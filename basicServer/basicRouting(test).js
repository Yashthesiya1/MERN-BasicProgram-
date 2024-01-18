const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, this is the home page!');
    }
    else if (parsedUrl.pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is about page');
    }
    else if (parsedUrl.pathname === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is contact page');
    }   
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('This is page not found');
    }
});

const port = 3500;
server.listen(port, () => {
    console.log(`server is runing at  port ${port}`);
});