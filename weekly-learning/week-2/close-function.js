// use a closure so the function and variable are only created once and persist
function closedFunction() {
    let counter = 0;
    let increment = () => {
        counter++;
        console.log(counter);
    };
    return {increment};
    // return increment
}

let count = closedFunction();
count.increment(); // count();
count.increment(); // count();


