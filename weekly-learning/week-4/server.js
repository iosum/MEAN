// include the express package
const express = require('express');

// create an express object
const app = express();

// default port for express is 3000
const port = 3000;

//  map http requests at localhost:3000 and send a response
app.get('/', (req, res) => {

   // send string response
   res.send('hello world.');

   // we can send a json object if we want to
   //res.send({'key' : 'hello world'});
});

app.get('/hello', (req, res) => {
   res.send('<h1>hello world</h1>');
});

app.get('/bye', (req, res) => {
   res.send('<h1>bye world</h1>');
});

// start the server for http events
app.listen(port, () => {
   console.log(`Example app listening on port ${port}!`);
});