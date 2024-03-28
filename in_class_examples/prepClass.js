//1 function called Search
//takes an array and a number
//return true if the number is found in the array, otherwise return false

let arr = [143,54,11,531,9,687]

function search (arr,num) {
    return arr.includes (num)
}


//2 function duplicateString 
//takes a string
//returns a new string where all the letters are duplicated
// hello = hheelllloo

// function duplicateString (str) {
//     let duplicateString = ""

//     for (let i = 0; i < str.length; i++) {
//         duplicateString += str[i] + str [i]
//     }
//     return duplicateString
// }

let arrString = ["hello", "goodbye", "something", "lamborghini"]
function duplicateString (arrStr) {
    let duplicateString = ""

    for (let i = 0; i < arrStr.length; i++) {

        for (let j = 0; j< arrStr[i].length; j++) {
            duplicateString += arrStr[i][j] + arrStr[i][j]
        }
        duplicateString += " "
    }

    return duplicateString.split(" ")
}


//function checkAge 
//prompt the user for a persons age
//if the age is a number AND is between 1 and 120, return the age
//otherwise, prompt the user for another age


function getAge() {
    let age;
    while (true) {
        age = parseInt (prompt ("enter your age"))
        if (age >=1 && age <= 120 && !isNaN(age)) {
            break
        }
        else {
            alert ("please enter a number between 1 and 120")
        }

    }
    return age
}



//divide two numbers
//function takes 2 numbers
//returns their division
//if the second number is a 0 give an error

let x = [1,2,3,4]

x.splice()


function divide () {
    let a = prompt ("number a")
    let b = prompt ("number b")
    if (b === 0) {
        alert ('b is 0')
    }
    return a/b
}







// function getAge () {
//     let age;
//     while (true) {
//         age = parseInt (prompt ("please enter your age"))
//         if (!isNaN(age) >=1 && age <= 120) {
//             break
//         }
//         else {
//             alert ("Enter a valid number between 1 and 120")
//         }
//     }
//     return age 
// }
