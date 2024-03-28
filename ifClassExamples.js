

let x = 10;
let y = 20;
let z = 30
let v = 10

if (y % x == 0 && z == 29) {
    console.log ("Wow!")
}

else if (v == x) {
    console.log ('equal')
}

else {
    console.log ('not wow')
}

//Three variables with numbers
//Using If = print the biggest number

let num1 = 84
let num2 = 31
let num3 = 173

if (num1 >= num2 && num1 >= num3) {
    console.log ("The biggest number is:", num1)
}
else if (num2 >= num3 && num2 >= num1) {
    console.log ("The biggest number is:", num2)
}
else {
    console.log ("The biggest number is:", num3)
}



//Take a number
//Using 'If' - if the number is even, print that it's even. If the number is odd, print that it's

let num = prompt ("enter a number")

if (num % 2 == 0) {
    console.log (num + " is an even number")
}
else {
    console.log (num + " is not an even number")
}


//We have grades for A, B, C, D, E
//Give each grade a value
//With the grade given (num 1 = something) print out what Letter it gets

let grade = 40

if (grade >= 90) {
    console.log ("A")
}
else if (grade >= 80) {
    console.log ("B")
}
else if (grade >= 70) {
    console.log ("C")
}
else if (grade >= 60) {
    console.log ("D")
}
else {
    console.log ("F")

}

let pizza = "hello"

if (pizza == "chicken") {
    console.log ("delicious")
}
else {
    if (pizza == "hello") {
        console.log ("correct")
    }
    else if (pizza == "pizza") {
        console.log ("not pizza")
    }
    else {
        console.log ("done")
    }
}