function getDayMessage(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "It's a weekday. Keep working hard!";
        case "Saturday":
        case "Sunday":
            return "It's the weekend. Time to relax!";
        default:
            return "Invalid day entered.";
    }
}

const today = "Sunday";
console.log (getDayMessage(today))  
