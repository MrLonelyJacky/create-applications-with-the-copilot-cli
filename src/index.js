#!/usr/bin/env node
// CLI Calculator
// Supports the four basic operations: +, -, *, /
// Also accepts operation names: add, sub, mul, div (and x, times)

const readline = require('readline');
const calc = require('./calculator');

const opMap = {
  '+': calc.add,
  'add': calc.add,
  '-': calc.subtract,
  'sub': calc.subtract,
  '*': calc.multiply,
  'x': calc.multiply,
  'times': calc.multiply,
  'mul': calc.multiply,
  '/': calc.divide,
  '÷': calc.divide,
  'div': calc.divide,
};

function printUsage() {
  console.log('Usage: node src/index.js <operation> <num1> <num2>');
  console.log('Operations: +, -, *, /  or add, sub, mul, div');
  console.log('Or run without args for an interactive prompt. Type "exit" to quit.');
}

function runOperation(op, aStr, bStr) {
  const fn = opMap[op.toLowerCase()];
  const a = parseFloat(aStr);
  const b = parseFloat(bStr);
  if (!fn) {
    console.error('Unknown operation:', op);
    printUsage();
    process.exit(2);
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Both operands must be numbers');
    process.exit(2);
  }
  try {
    const res = fn(a, b);
    console.log(res);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  // interactive mode
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  console.log('Simple CLI Calculator — supports +, -, *, /');
  console.log('Examples: "add 2 3"  or  "2 + 3"  — type exit to quit');

  rl.setPrompt('calc> ');
  rl.prompt();
  rl.on('line', (line) => {
    const input = line.trim();
    if (!input) { rl.prompt(); return; }
    if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
      rl.close();
      return;
    }

    // Try formats: "op a b"  or  "a op b"
    const parts = input.split(/\s+/);
    if (parts.length === 3) {
      // either "op a b" or "a op b" — detect which
      if (isNaN(parts[0]) && !isNaN(parts[1])) {
        // op a b
        runOperation(parts[0], parts[1], parts[2]);
      } else if (!isNaN(parts[0]) && isNaN(parts[1])) {
        // a op b
        runOperation(parts[1], parts[0], parts[2]);
      } else {
        console.error('Could not parse input. Try: add 2 3  OR  2 + 3');
      }
    } else {
      // try to match expressions like "2+3" or "2 + 3"
      const m = input.match(/^(\-?\d+(?:\.\d+)?)\s*([+x\-*\/=÷])\s*(\-?\d+(?:\.\d+)?)/i);
      if (m) {
        const a = m[1];
        const opSym = m[2];
        const b = m[3];
        runOperation(opSym, a, b);
      } else {
        console.error('Unrecognized input. Examples: "add 2 3"  or  "2 + 3"');
      }
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Goodbye');
    process.exit(0);
  });
} else if (args.length === 3) {
  runOperation(args[0], args[1], args[2]);
} else {
  printUsage();
  process.exit(2);
}