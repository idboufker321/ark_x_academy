function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    try {
        if (b === 0) {
          throw new Error("Cannot divide by zero!");
        } else {
          return a / b;
        }
      } catch (error) {
        console.error(error.message);
        // You can choose to return a default value or take other actions if needed.
        
      }
};

module.exports = {add, subtract, multiply, divide,};