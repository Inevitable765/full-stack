// If 3 inputs have to be taken from the user.
// Number 1 = first number
// Number 2 = second number.
// Operator =( +,- ,*, /)
// If operator + is  number 1 + number 2 
// If operator - is  number1-number2
// If operator * is  then Number1*Number2
// If operator / is 
//  number 1 / number2
// Otherwise print invalid input

function performCalculation(number1, number2, operator) {
    let result;
    
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        if (number2 !== 0) {
          result = number1 / number2;
        } else {
          console.log("Error: Division by zero");
          return;
        }
        break;
      default:
        console.log("Invalid input");
        return;
    }
    
    console.log("Result:", result);
  }
  console.log(performCalculation())