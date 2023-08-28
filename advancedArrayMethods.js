//filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//for each 
let fruits = ["apple", "banana", "orange", "grape"];

fruits.forEach(fruit => console.log("I like", fruit));

// Output:
// I like apple
// I like banana
// I like orange
// I like grape

//map

let numbers2 = [1, 2, 3, 4, 5];

let squaredNumbers = numbers2.map(number => number * number);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

