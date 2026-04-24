// METHOD 1: Function Declaration (most common)
function add(a, b) {
  return a + b;
}

// METHOD 2: Function Expression
const subtract = function (a, b) {
  return a - b;
};

// METHOD 3: Arrow Function (modern, shorter)
const multiply = (a, b) => {
  return a * b;
};

// Even shorter arrow function (single line return)
const divide = (a, b) => a / b;

// Arrow function with one parameter (parentheses optional)
const square = (x) => x * x;

// All work the same way
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15
console.log(divide(5, 3)); // 1.666
console.log(square(5)); // 25
