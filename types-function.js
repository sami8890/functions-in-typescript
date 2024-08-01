"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myobj = {
    hobbies: ["abdullah ", "sami ", " gabol"],
    func: () => {
        myobj.hobbies.shift();
    }
};
myobj.func();
const myAnswer = myobj.hobbies[1];
console.log(myAnswer);
console.log(`------------------------------------`);
// self invocating function
(function () {
    return console.log("sami");
}());
console.log(`--------------------------------`);
// function expression
// myFunc(); // we can not call function expression without declaring it
const myFunc = function () {
    console.log(`sania`);
    console.log(`---------------------`);
};
myFunc();
// function decleration with hoisting 
myFunc2(); // we can call it before declaring it
function myFunc2() {
    console.log("sami");
}
