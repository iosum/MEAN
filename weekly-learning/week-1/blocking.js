// include node's filesystem library to read the text file
const fs = require("fs");

// read and display food list
let food = fs.readFileSync("food.txt","utf-8");
console.log(food);

console.log("hello food");

// read and display drink list
let drink = fs.readFileSync("drinks.txt","utf-8");
console.log(drink);

console.log("hello drink");





