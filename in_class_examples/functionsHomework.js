//1 subtractOrDouble - 

function subtractOrDouble (num) {
    if (isNaN(num)) {
        alert ("Enter only a number")
    }
    return num % 2 === 0? num * 2 : num - 3
}



// //2
// -Research the .toString() method and use it in this question:
// Write a function that takes an array of numbers and, if the second digit of each number is even, adds a random digit to the number.

let arr = [1,34,678,1435,56,75]

function addRandom (array) {
    for (let i = 0; i<array.length; i++) {

       //change current num to String 
        let numStr = array[i].toString()

        //check if num has at least 2 digits, and the second one is even
        if (numStr.length >= 2 && numStr[1] % 2 === 0) {
            let randomDigit = Math.floor (Math.random () * 10)

        numStr += randomDigit

        //turn string back into a number and return to the array 

        array[i] = parseInt (numStr)
        }



    }
    return array
}


//3 modifyAndSum - take array of number - for each number, if it's even divide by 4, if it's odd multiply by 2. Then, sum all the modified numbers and return the sum
//try to use short if 

let arrModify = [1,34,678,1435,56,75]

function modifyAndSum (arr) {
    let sum = 0
    for (let num of arr) {
        sum += num % 2 === 0 ? num / 4 : num * 2
    }
    return sum
}


//4 function containsZero - checks if an array of numbers includes at least one zero

let arr2 = [4,0,44,606,0]

// function containsZero (arr) {
//     for (let num of arr) {
//         if (num === 0) {
//             return true
//         }
//     }
//     return false
// }

function containsZero (arr) {
    return arr.includes(0)
}



//5 function average 
function average (arr) {
    if (arr.length === 0) {
        alert ('array is empty')
    }
    let sum = 0
  
    for (num of arr) {
        sum += num
    }

  return sum / arr.length
 

}

//6 function reverseWords 
let string = "dogs are red and cats are orange"

function reverseWords (str) {
    return str.split(" ").reverse ().join(" ")
}

let x = "10"
console.log (x.parseInt(x,2))