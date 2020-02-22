// import http library
const http = require("http");

// link to node's url library to parse url parameters
// require the url library
// e.g. http://localhost:3000?subtotal=100
const url = require("url");

// include the accounting npm package we installed locally for this project only
const accounting = require("accounting");

// start the server
http.createServer((req, res) => {
   // http header w/ ok status
   res.writeHead(200);

   // print the h1 tag
   res.write("<h1>Tax calculators</h1>");

   // read the subtotal parameter from the url string
   let query = url.parse(req.url,true).query;

   // parse the subtotal value so we can use it to calculate
   // in PHP, it is _GET['subtotal']
   // parseFloat() : is to convert query key into float data type
   let subtotal = parseFloat(query.subtotal);

   // calculate tx and total using the subtotal value above
   let tax = subtotal * 0.13;
   let total = subtotal + tax;


   res.write("<p>Tax : </p>" + accounting.formatMoney(tax) +
       "<p>Total : </p>" + accounting.formatMoney(total)
       + "<p>Subtotal : </p>" + accounting.formatMoney(subtotal));

   // end the response
   res.end();
}).listen(3000);