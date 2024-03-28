//Stage 1 - create a function called big10 that takes a number and returns a boolean if the number is larger than 10. Make sure to check that the user gave you a number and not a string


// Stage 2 - create a function called 'filter' that accepts an array and retrurn a new array with all the numbers that are larger than 10. Use the 'big10' function inside


//Stage 3 - create a function called divide5 that accepts a number and checks if it's divisible by 5
//make sure we only take a number and nothing else!

//Stage4 create a function called filterArr thats takes an array of numbers and returns a new array of numbers that divide by 5. use divide5!

// stage 5 
// create a function called inBetween that accepts an array of numbers and return a new array of numbers that are between 30 and 50

//Stage 6 write a function called add10 that takes an array of number and returns a new array after adding 10% to every number

//Stage7 write a function called printPrice that takes an array and prints the following:
//Price: 23
//Price: 11
//use backtick

//Stage 8 - write a function called modifyArray that accepts an array and returns a new array - if the number is odd, it adds to the array. if even, it multiplies by 3 and then adds to the array

function modifyArray (array) {
    let newArr = []
    for (num of array) {
        if (num % 2 === 0){
            newArr.push (num * 3)
        }
        else {
            newArr.push (num)
        }
    }
    return newArr
}




let prices = [11,23,564,1098,4,687]

function printPrices (prices) {
    for (num of prices) {
        console.log(`Price: ${num} \n *---------*`);
    }
}








let add10Array = [11,51,52,45,34,29,30,50,49]

function add10 (array) {
    let arr10 = []

    for (num of array) {

        arr10.push (Math.round(num*1.1))
    }
    return arr10
}





let inBetwenArr = [11,51,52,45,34,29,30,50,49]

function inBetween (array) {
    let newArr = []
    for (num of array) {
        if (num >=30 && num <= 50) {
            newArr.push (num)
        }
    }
    return newArr
}






let arr5 = [100,55,43,87,88,80,60,0,5]

function filterArr (array) {
        let newArr = []

        for (num of array) {
            if (divide5(num)) {
                newArr.push (num)
            }
        }

        return newArr
}


function divide5 (num) {
    if (typeof num !== 'number') {
        return 'You entered an invalid number'
    }
    else {
        return num % 5 === 0
    }
}

let arr = [102,34,4,56,98,78,63]


function filter(array) {
    let newArr = []

    for (num of array) {
        if (big10(num)) {
            newArr.push (num)
        }
    }
    
    return newArr
}



function big10 (num) {

    return typeof num === 'number' ? num >10 : alert ('only numbers')

}



    // if (typeof num === 'number') {
    //     return num > 10
    // }
    // else {
    //     return false
    // }
// if (!isNaN(num)) {
//     return num > 10
// }
// else {
//     alert ("only enter a number")
// }