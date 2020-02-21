// start up an http server

// link to node's http module
const http = require("http");
// start the web server using a callback funcion
// run the server at localhost 3000 for http requests
http.createServer((req, res) => {
    // send an http ok status
    res.writeHead(200,{
        'Content-Type' : 'text-plain'
    });
    res.write('hello world!');
    res.end();
}).listen(3000);

console.log("server is running on port 3000!");
