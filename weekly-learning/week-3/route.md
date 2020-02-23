# Routing with connect

## Http library
- all request runs the same time when using
the http library

## Connect Module
- extends http module
- like a middleware, sitting on the top of the http library and give some
extra functionality we can use
- interpret the different path in the url to send a different response
- allows us to perform some logic and return some response


- middleware
    - connect middleware is just a js function with a unique name
    - each middleware is defined w/ 3 arguments
        - req : HTTP request
        - res : HTTP response
        - next : let us send a response back to the browser and 
        call another function for sth else


---
### Dispatcher

- allow us to read the specific url
- knows which controllers to call
- knows what methods inside the controller

