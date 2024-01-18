const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Routing
    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, this is the home page!');
    } else if (parsedUrl.pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the about page.');
    } else if (parsedUrl.pathname === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact us at: example@email.com');
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const port = 3000;

server.listen(ports, () => {
    console.log(`Server is running at ${ports}`);
});
