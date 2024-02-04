//Task 1
function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
      f *= i;
  }
  return f;
}
let num = 5;
console.log(factorial(num));


//Task 2

// Factorial function
function factorial2(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial2(n - 1);
    }
  }
  
  // Combinatorial function
  function combinator(n, p) {
    if (n < p) {
      return "Invalid input: n should be greater than or equal to p";
    }
  
    const numerator = factorial(n);
    const denominator = factorial(p) * factorial(n - p);
  
    return numerator / denominator;
  }
  
  // Example function call:
  console.log(combinator(5, 2));  // Output: 10 

//Task 3

function calculator(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Cannot divide by zero";
        }
      case "%":
        if (num2 !== 0) {
          return num1 % num2;
        } else {
          return "Cannot calculate modulo with zero";
        }
      case "c":
        return Math.pow(num1, num2);
      default:
        return "Invalid operator";
    }
  }
  
  // Example function calls:
  console.log(calculator(5, "+", 1));   // Output: 6
  console.log(calculator(3, "*", -4));  // Output: -12
  console.log(calculator(5, 'c', 2));   // Output: 25