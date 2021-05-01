import http from 'http';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
  }).listen(3001);

  exports.myDateTime = () => Date();
  