try {
    let userInput = prompt("Enter a number:");
    let parsedNumber = parseInt(userInput);
  
    if (isNaN(parsedNumber)) {
      throw "Invalid input. Please enter a valid number."; 
    }
    else if (parsedNumber == "hello") {
        throw "can't be hello"
    }
  
    let result =parsedNumber;
    console.log("Result:", result);
  } catch (error) {
 
    console.error("An error occurred:", error);
  } finally {
    console.log("The try-catch block has finished.");
  }
  

  