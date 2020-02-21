// require the file system library
const fs = require("fs");

/**
 * food variable can be used in both variable name and inside the parameter
 * create a variable and in the same line of code use the same variable
 * 
 * The idea of the colsure is wrapping around the function for 2 reasons:
 * 1. the wrapper allows the callback to happen, it also affect how variable used and the memory used or reused
 */

// read and display the food list
let food = fs.readFile("food.txt", "utf-8", (error, food) => {
    console.log(food);

    let drink = fs.readFile("drinks.txt", "utf-8", (error, drink) => {
        console.log(drink);

    })
});

console.log("hello food.");



console.log("hello drinks");

/**
 * why load the hello food and drink first?
 * because it takes time to read the file, the code continues to execute, it prints the heading
 * the whole non-blocking.js is still running
 * in parallel, it's also reading and opening the drinks file, this also takes time
 * so when that's running, print the hello drinks header
 * 
 */

