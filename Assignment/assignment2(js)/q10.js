// 10. Switch Statement: Create a function getDayType that takes a number (1-7) as an argument and returns: - "Weekend" if the number is 6 (Saturday) or 7 (Sunday), - "Weekday" if the number is between 1 and 5. Use a switch statement to implement this logic

function getDayType(dayNumber) {
  switch(dayNumber) {
    case 6:
    case 7:
      return "Weekend";
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday";
    default:
      return "Invalid day number";
  }
}

console.log(getDayType(3));
console.log(getDayType(6));
console.log(getDayType(8));
  