const http = require('node:http');
const assert = require('node:assert');
const server = require('./server');

const port = 3000;

server.listen(port, () => {
  http.get(`http://localhost:${port}`, res => {
    try {
      assert.strictEqual(res.statusCode, 200);
      console.log('Index returned 200');
      http.get(`http://localhost:${port}/results.html`, res2 => {
        try {
          assert.strictEqual(res2.statusCode, 200);
          console.log('Results returned 200');
          http.get(`http://localhost:${port}/results.js`, res3 => {
            try {
              assert.strictEqual(res3.statusCode, 200);
              console.log('Results JS returned 200');
              console.log('All tests passed');
            } finally {
              server.close();
            }
          }).on('error', err3 => {
            console.error('Request failed', err3);
            server.close(() => process.exit(1));
          });
        } catch (e) {
          console.error('Assertion failed', e);
          server.close(() => process.exit(1));
        }
      }).on('error', err2 => {
        console.error('Request failed', err2);
        server.close(() => process.exit(1));
      });
    } catch (e) {
      console.error('Assertion failed', e);
      server.close(() => process.exit(1));
    }
  }).on('error', err => {
    console.error('Request failed', err);
    server.close(() => process.exit(1));
  });
});
