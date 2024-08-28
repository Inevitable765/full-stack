// Write a function named sayHello that takes no parameters and returns the string "Hello, World!"
function sayhello()
{
    return "Hello, World!";
}
console.log(sayhello());



// Create a function doubleNumber that takes a number as an argument and returns the number
// multiplied by 2.
function doublefunction(num){
    return num*2
}
console.log(doublefunction(5));



// Write a function addTwoNumbers that accepts two numbers as arguments and returns their sum.
function addtwonumbers(a,b){
    return a+b;
}
console.log(addtwonumbers(5,7));


// Create a function subtractTen that takes a number as an argument and returns the result of
// subtracting 10 from it.
function subtractten(num){
    return num-10;
}
console.log(subtractten(20));


// Comparison Operator:
//  Write a function isGreaterThanFive that takes a number as an argument and returns true if the
// number is greater than 5, otherwise false
function isgreaterthanfive(num){
    return  num>5;
}
console.log(isgreaterthanfive(7));



// . Logical Operator:
//  Write a function isBetweenOneAndTen that takes a number as an argument and returns true if
//  the number is between 1 and 10 (inclusive), otherwise false.
function isBetweenOneAndTen(number) {
    return number >= 1 && number <= 10;
  }
console.log(isBetweenOneAndTen(5)) ;



// Write a function isEven that takes a number as an argument and returns "Even" if the number is
// even, and "Odd" if the number is odd
function isEven(num){
    return num%2==0;
}
console.log(isEven(4));



// 9. Ternary Operator:
//  Write a function checkAge that takes an age as an argument and returns "Adult" if the age is 18
//  or above, and "Minor" if the age is below 18. Implement this using the ternary operator.

function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
  }
console.log(checkAge(34));



// Switch Statement:
//  Create a function getDayType that takes a number (1-7) as an argument and returns:
//  - "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
//  - "Weekday" if the number is between 1 and 5.
//  Use a switch statement to implement this logic.

function getDayType(dayNumber) {
    switch (dayNumber) {
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
console.log(getDayType(4)) ;