//  arrow function was introduced in ES6 in 2015
//  it is a new way of writing function
//  it is very similar to normal function

const myFunc = (num1: number, num2: number): number => {
  return num1 * num2;
};
const result = myFunc(9, 6);

console.log(result);

// console.log(`-----------------------`);

//    arrow function with object literal
let arrow = (
  myName: string,
  myFathername: string,
  myAge: number,
  mysallary?: number
): void => {
  console.log(myName, myFathername, myAge, mysallary);
};
arrow("abdullah", "sami", 18, 20000);

