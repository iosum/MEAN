// create a closure structure in vanilla js

function parent() {
    // this variable exists in the entire scope of the parent function, including any child functions
    let message = "hello world";

    // js allows us to create nested functions
    // create a message for child function
    function child() {
        console.log(message);
        
    }

    // execute the child function
    child();
}

// try to execute the file
parent();
