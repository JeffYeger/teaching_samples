const size = 5;

for (let i = 1; i <= size; i++) {
    let row = "";
    
    for (let j = 1; j <= size; j++) {
        if (i === 1 || i === size || j === i) {
            row += "*";
        } else {
            row += " ";
        }
    }
    
    console.log(row);
}





