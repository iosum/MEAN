const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200);

    res.write("<h1>For Loop</h1>");
    res.write("<ul>");
    for (let i = 1; i <= 20; i++) {
        res.write("<li>" + i + "</li>");
    }
    res.write("</ul>");
    res.end();

}).listen(3000);

