
//counting with a for loop
for (let count = 0; count < 5; count++) {
    console.log("Count:", count);
}

//countdown with for loop 

for (let countDown = 5; countDown > 0; countDown--) {
    console.log(countDown);
}

console.log("Done!");


//loop over array 
let colors = ["red", "green", "blue", "yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}



for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        row += result + "\t";
    }
    console.log(row);
}

// console.log ("_____")

// const size = 5;

// for (let i = 1; i <= size; i++) {
//     let row = "";
    
//     for (let j = 1; j <= size; j++) {
//         if (i === 1 || i === size || j === i) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
    
//     console.log(row);
// }

