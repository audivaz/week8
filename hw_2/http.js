var http = require("http");

var server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>What is good my peeps</h1>");
  }
  res.end();
});

//! Great job here, but the server only returns "What is good my peeps" when you are on the default path of '/'. If you try to type 'http://localhost:3000/about'
//! We do not see the written line. You can make the server return this text on ANY path by just removing the === '/'. If you leave it as just if (req.url) on line 4, then EVERY request will
//! return true, no matter the path

server.listen(3000);
console.log(`The HTTP Server is running on port 3000`);

//! Great job!
