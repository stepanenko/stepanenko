
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Node');
});

// server.on('request', (req, res) => {
//   res.end('Hello Node');
// });

server.listen(3001, () => console.log('Listening...'));
