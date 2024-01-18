const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is Home page');
    }
    else if (parsedUrl.pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is About page');
    }
    else if (parsedUrl.pathname === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is Contact page');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }

});
const port = 4000;
server.listen(port, () => {
    console.log(`Server running at ${port}`);
});