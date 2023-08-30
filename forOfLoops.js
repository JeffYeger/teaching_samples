const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}


const values = [10, 20, 30, 40, 50];
let sum = 0;

for (const value of values) {
  sum += value;
}

console.log("Sum:", sum);


const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (const value of array) {
  for (const v of value) {
    console.log(v);
  }
}


const stringArray = ["hello", "world", "example"];

for (const str of stringArray) {
  for (const char of str) {
    console.log(char);
  }
}
