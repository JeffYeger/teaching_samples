// Creating an object with properties - Key:Value
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    motherName : "Rachel",
    score: 30,
    function: function nothing () {console.log ('nothing')}
};

console.log(person);

// Accessing object properties using dot notation
console.log(person.firstName); // Output: John
console.log(person.age);       // Output: 30

// Accessing object properties using bracket notation
console.log(person["lastName"]); // Output: Doe
console.log(person["isStudent"]); // Output: false

// Adding a new property
person.city = "New York";

// Modifying an existing property
person.age = 31;

// Deleting a property
delete person.isStudent;




