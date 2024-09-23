// 7. Logical Operator: Write a function isBetweenOneAndTen that takes a number as an argument and returns true if the number is between 1 and 10 (inclusive), otherwise false.

function isBetweenOneAndTen(number) {
  return number >= 1 && number <= 10;
}

console.log(isBetweenOneAndTen(5)); 
console.log(isBetweenOneAndTen(0)); 
console.log(isBetweenOneAndTen(11));