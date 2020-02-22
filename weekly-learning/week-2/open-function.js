/**
 * every time we call openFunction(), the function is created in the memory,
 * counter variable is created and initialized, the code runs, so the value,counter,
 * cannot maintain w/o using a global variable
 *
 */


// create a function to be called with multiple times w/o a closure

function openFunction() {
    let counter = 0;
    // add 1 to the counter
    counter++;
    console.log(counter);
}

// call the function more than once
openFunction();
openFunction();