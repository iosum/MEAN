function init() {
    const name = 'goog'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    return displayName;
}

const foo = init();
foo();