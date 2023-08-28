//Example 1

let x = 10

if (1+1 >= 2) {
 console.log ("True")
}
else {
    console.log ("False")
}


//Example 2

const num1 = 10;
const num2 = 5;

if (num1 == num2) {
    console.log("The numbers are equal.");
} else {
    console.log("The numbers are not equal.");
}

// Example 3

const age = 18;

if (age > 18) {
    console.log("You are older than 18.");
} else if (age === 18) {
    console.log("You are exactly 18 years old.");
} else {
    console.log("You are younger than 18.");
}


//Example 4

const grade = 85;
const attendance = true;

if (grade >= 70 && attendance) {
    console.log("Congratulations! You passed the course.");
} else if (grade >= 70 && !attendance) {
    console.log("You passed, but attendance could be better.");
} else {
    console.log("Unfortunately, you did not pass.");
}

