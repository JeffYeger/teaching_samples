//find element in array:

let sampleArray = [1,2,3]
sampleArray[1]
//output will be 2

//concat arrays
let array = ["hello", 123, true, false, "wow"]
let array2 = ["newinfo", 123]

let array3 = array.concat(array2)

console.log (array3)

//pop removes last element:

let numbers = [1, 2, 3, 4, 5];
let poppedElement = numbers.pop();

console.log("Array after popping:", numbers); // Output: Array after popping: [1, 2, 3, 4]
console.log("Popped element:", poppedElement); // Output: Popped element: 5


//shift removes first element 
let color = ["red", "green", "blue"];
let shiftedElement = color.shift();

console.log("Array after shifting:", color); // Output: Array after shifting: ["green", "blue"]
console.log("Shifted element:", shiftedElement); // Output: Shifted element: red

//unshift adds elements to the beginning 
let fruits = ["apple", "banana", "orange"];
fruits.unshift("grape", "kiwi");

console.log("Array after unshifting:", fruits); // Output: Array after unshifting: ["grape", "kiwi", "apple", "banana", "orange"]


//push adds elements to the end 
let animals = ["cat", "dog"];
animals.push("elephant", "giraffe");

console.log("Array after pushing:", animals); // Output: Array after pushing: ["cat", "dog", "elephant", "giraffe"]


//splice - add, remove, change elements in array 

//adding element with splice:
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // Output: ["red", "yellow", "purple", "green", "blue"]

//removing element with splice:
let fruit = ["apple", "banana", "orange", "grape"];
fruit.splice(1, 2);

console.log(fruit); // Output: ["apple", "grape"]

//changing elements with splice:
let animal = ["cat", "dog", "elephant"];
animal.splice(1, 1, "tiger");

console.log(animal); // Output: ["cat", "tiger", "elephant"]

