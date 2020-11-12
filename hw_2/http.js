var http = require('http');


var server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>What is good my peeps</h1>');
    }
    res.end();
});


server.listen(3000);
console.log(`The HTTP Server is running on port 3000`);
