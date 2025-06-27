const http = require('node:http');
const fs = require('node:fs');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/' || req.url === '/index.html') {
      fs.readFile('index.html', (err, data) => {
        if (err) return res.end('Error');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
      });
      return;
    }
    if (req.url === '/style.css') {
      fs.readFile('style.css', (err, data) => {
        if (err) return res.end('Error');
        res.writeHead(200, {'Content-Type':'text/css'});
        res.end(data);
      });
      return;
    }
    if (req.url === '/results.html') {
      fs.readFile('results.html', (err, data) => {
        if (err) return res.end('Error');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
      });
      return;
    }
    if (req.url === '/results.js') {
      fs.readFile('results.js', (err, data) => {
        if (err) return res.end('Error');
        res.writeHead(200, {'Content-Type':'application/javascript'});
        res.end(data);
      });
      return;
    }
    if (req.url === '/step3pt.js') {
      fs.readFile('step3pt.js', (err, data) => {
        if (err) return res.end('Error');
        res.writeHead(200, {'Content-Type':'application/javascript'});
        res.end(data);
      });
      return;
    }
    if (req.url === '/script.js') {
      fs.readFile('script.js', (err, data) => {
        if (err) return res.end('Error');
        res.writeHead(200, {'Content-Type':'application/javascript'});
        res.end(data);
      });
      return;
    }
  }
  res.writeHead(404);
  res.end('Not found');
});

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = server;
