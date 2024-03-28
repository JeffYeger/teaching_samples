// Operators 

let 
a = 5,
b = 10,
c = 15,
d = 20

// Mathematical Operators + - * / ** % +=

console.log(b % a);
console.log (d*b)
console.log (a = a + 10)
console.log (a += 10)

// Comparison Operators == === != !== > < =< >=

let num1 = 10;
let num2 = 5;

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



//Logical Operators && || !

let x = 10
let y = 20
let z = 40

console.log (z > y && z < x)
console.log (z > y || z < x)
console.log (!true)