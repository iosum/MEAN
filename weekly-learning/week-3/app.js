// include connect npm package
const connect = require('connect');

// create an instance of a connect object
const app = connect();

// as the server is not responding when we send the get request
// create a hello world function to send an http response to any incoming request
// i.e. fix Cannot _GET response
let helloWorld = (req, res, next) => {
    res.writeHead(200);
    res.write('<h1>hello world</h1>');
    res.end();
};

let goodbyeWorld = (req, res, next) => {
    res.writeHead(200);
    res.write('<h1>goodd bye world</h1>');
    res.end();
};

// let notFound = (req, res, next) => {
//     // return http status 404 not found
//     res.writeHead(404);
//     res.write('<h1>404 not found</h1>');
//     res.end();
// };


let index = (req, res, next) => {

    if(req.url === '/') {
        res.writeHead(200);
        res.write('<h1>welcome</h1>');
        res.end();
    }
    else {
        res.writeHead(404);
        res.write('<h1>page not found</h1>');
    }
    res.end();

};


// map ALL request to be handled by the hello world function
//app.use(helloWorld);




// map /hello request to be handled by the hello world function
app.use('/hello', helloWorld);

app.use('/bye', goodbyeWorld);

// default request handler for any url paths besides /hello and goodbye
//app.use(notFound);

// MUST be last, or else overrides ALL other paths
app.use('/', index);


// start the web server on port 3000
app.listen(3000);

console.log('server is runnign on port3000');

