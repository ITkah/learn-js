//1 A function is a block of code that performs a specific task and takes arguments, and can also be called multiple times.

//2 The function body is the code inside the curly braces {} that is executed when the function is called.

//3 
function sum(a, b) {
  return a + b;
}
const sumSecond = function(a, b) {
  return a + b;
};

//4 
sum(2, 3);

//5 An argument is a value that is passed to a function when it is called.

//6
//Local — declared inside a function, only accessible there
//External — declared outside a function, also accessible inside

//7
//Parameter — a variable in a function definition
//Argument — the actual value when called

//8 The function will return undefined and terminate immediately.

//9

function averageValue(a, b) {
  return (a + b) / 2;
}
averageValue(4, 8);
//10
function rectangleArea(length, width) {
  return length * width;
}
rectangleArea(5, 10);
//11
function collString(str) {
    return str.length
}
collString("Hello, world!");