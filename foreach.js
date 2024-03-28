let array = [1,2,3,4,5,6,7]
let strArr = ["a","h","t","b","l"]

let uppperArr = strArr.map ((letter) => {
    return letter.toUpperCase()
})

console.log (uppperArr)


strArr.sort()



let numArr = [123,421,122,1233,987,5]

numArr.sort()
console.log (numArr)


array.forEach((score,index)=>{
    array[index] = score + 10
})




let numArray = [2,3,45,98,132,3,8]

function something (a,b)
 {

 }
let evenNum = numArray.filter(num => num % 2 ===0)

