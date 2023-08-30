let num1 = 10;
let num2 = 5;

// Increment and Decrement
num1++; // Increment num1 by 1
num2--; // Decrement num2 by 1

console.log("After increment and decrement:");
console.log("num1:", num1); // Output: num1: 11
console.log("num2:", num2); // Output: num2: 4

// Arithmetic Operations
let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division

console.log("Arithmetic operations:");
console.log("Sum:", sum); // Output: Sum: 15
console.log("Difference:", difference); // Output: Difference: 7
console.log("Product:", product); // Output: Product: 44
console.log("Quotient:", quotient); // Output: Quotient: 2.75

// Comparison Operators
let isEqual = num1 == num2; // Equal to
let isNotEqual = num1 != num2; // Not equal to
let isGreater = num1 > num2; // Greater than
let isLess = num1 < num2; // Less than
let isGreaterOrEqual = num1 >= num2; // Greater than or equal to
let isLessOrEqual = num1 <= num2; // Less than or equal to

console.log("Comparison results:");
console.log("isEqual:", isEqual); // Output: isEqual: false
console.log("isNotEqual:", isNotEqual); // Output: isNotEqual: true
console.log("isGreater:", isGreater); // Output: isGreater: true
console.log("isLess:", isLess); // Output: isLess: false
console.log("isGreaterOrEqual:", isGreaterOrEqual); // Output: isGreaterOrEqual: true
console.log("isLessOrEqual:", isLessOrEqual); // Output: isLessOrEqual: false

// Logical Operators
let logicalAND = isGreater && isLess; // Logical AND
let logicalOR = isGreater || isLess; // Logical OR
let logicalNOT = !isGreater; // Logical NOT

console.log("Logical operations:");
console.log("logicalAND:", logicalAND); // Output: logicalAND: false
console.log("logicalOR:", logicalOR); // Output: logicalOR: true
console.log("logicalNOT:", logicalNOT); // Output: logicalNOT: false
