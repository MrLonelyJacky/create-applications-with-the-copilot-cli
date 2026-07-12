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

// Modulo: returns remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

// Power: base raised to exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root: returns sqrt(n); throws on negative input
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };