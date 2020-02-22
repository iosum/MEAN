/**
 * the benefit of using closure:
 * 1. every time we create a function, we need to allocate the memory to the function, but in
 * the closure, we can reuse the memory again
 */

/**
 * drawback of using the global variable in vanilla js
 * 1. if we declare at the top of the page, the variable always holds that memory
 * 2. might conflict with vanilla js naming
 * 3. 
 *
 */


// create closure  or "wrapper function"

function parent() {
    // create a variable available anywhere inside the closure
    let message = "hello world";

    function child() {
        console.log(message);
    }
    return child;
}
let childFunction = parent();
console.log(childFunction);
childFunction();