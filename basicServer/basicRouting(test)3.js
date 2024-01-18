const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parse = url.parse(req.url, true);

    if (parse.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This Is Home Page');

    }
    else if (parse.pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'textplain' });
        res.end('This Is About Page');
    }
    else if (parse.pathname === '/contact') {
        res.writeHead(200, { 'Content-Type': 'textplain' });
        res.end('This Is Contact Page');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'textplain' });
        res.end('This Page Not found');
    }
});
const port = 7000;
server.listen(port, () => {
    console.log(`${port}`);
})