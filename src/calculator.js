// Calculator: supports the four basic operations used in the provided image
// Supported operations:
//  - addition       (+, add)
//  - subtraction    (-, sub)
//  - multiplication (x, *, mul, times)
//  - division       (÷, /, div)

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };