var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(302, { Location: 'https://arve0.github.io/NBLeser' });
  res.end();
});

server.listen(3000);
