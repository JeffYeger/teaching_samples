// +=

// let num = 0

// while (num < 100) {
//     console.log (num)
//     num += 2
// }

// while (num <= 100) {
//     if (num % 2 == 0) {
//         console.log (num)
        
//     }
//     num ++
// }


//using a while loop, add up all the numbers between 1 and 20
//print out the total 




let num = 1
let sum = 0

while (num <= 20) {
    sum += num
    num ++
}

console.log (sum)


let i = 1

while (i <= 5) {
    let j = 1
    let row = ""
    while (j <= 5) {
        row += i*j + "\t"
        j++
    }
    console.log (row)
i++
}