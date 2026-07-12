## Feature Description

Add a Node.js CLI calculator that supports basic arithmetic operations: addition, subtraction, multiplication, and division. The calculator should be implemented in calculator.js and provide a clear CLI interface for performing these operations.

## Use Case

Users need a simple command-line tool to perform quick calculations or to use within scripts and automation. A small, well-documented CLI calculator removes the need to open a REPL or write short scripts for simple arithmetic.

## Proposed Solution

Implement calculator.js exposing a CLI (e.g., `node calculator.js <operation> <num1> <num2>`) that supports the following operations:
- add (addition)
- sub (subtraction)
- mul (multiplication)
- div (division)

Behavior and requirements:
- Accept integers and floating-point numbers
- Validate numeric input and show helpful error messages for invalid input
- Handle divide-by-zero with a clear error message and non-zero exit code
- Print result to stdout
- Provide a `--help` flag showing usage examples

Example usage:

```
node calculator.js add 2 3    # 5
node calculator.js div 7 2    # 3.5
```

## Additional Context

Acceptance criteria:
- calculator.js is added at the repository root (or appropriate src/) and is executable with Node.js
- Unit tests or basic integration tests are provided (optional but recommended)
- README update or short usage section is included showing how to run the CLI

Please tag this as an enhancement/feature request and assign to anyone available to implement it.