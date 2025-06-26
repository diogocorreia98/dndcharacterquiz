const http = require('node:http');
const assert = require('node:assert');
const server = require('./server');

const port = 3000;
server.listen(port, () => {
  http.get(`http://localhost:${port}`, res => {
    try {
      assert.strictEqual(res.statusCode, 200);
      console.log('Index returned 200');
      console.log('All tests passed');
    } finally {
      server.close();
    }
  }).on('error', err => {
    console.error('Request failed', err);
    server.close(() => process.exit(1));
  });
});
