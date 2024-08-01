"use strict";
//  arrow function was introduced in ES6 in 2015
//  it is a new way of writing function
//  it is very similar to normal function
Object.defineProperty(exports, "__esModule", { value: true });
const myFunc = (num1, num2) => {
    return num1 * num2;
};
const result = myFunc(9, 6);
console.log(result);
// console.log(`-----------------------`);
//    arrow function with object literal
let arrow = (myName, myFathername, myAge, mysallary) => {
    console.log(myName, myFathername, myAge, mysallary);
};
arrow("abdullah", "sami", 18, 20000);
// example 
function myFunction(a, b) {
    return myFunction.length;
    console.log(myFunction);
}
myFunction(5, 5);
console.log(`--------------------`);
