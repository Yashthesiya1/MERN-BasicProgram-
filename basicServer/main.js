const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Get the requested URL
  const requestedUrl = req.url === '/' ? '/main.html' : req.url;



  // Construct the file path based on the requested URL
  const filePath = path.join(__dirname, 'public', requestedUrl);

  // Read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle file not found error
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      // Set the appropriate content type based on the file extension
      const contentType = getContentType(filePath);
      res.writeHead(200, { 'Content-Type': contentType });

      // Send the file content as the response
      res.end(requestedUrl);
    }
  });
});

// Get content type based on file extension
function getContentType(filePath) {
  const extname = path.extname(filePath).toLowerCase();
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    default:
      return 'application/octet-stream';
  }
}

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
