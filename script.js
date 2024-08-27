
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(firstOperand, secondOperand, operation){
    switch(operation){
        case 'add':
            return add(firstOperand, secondOperand);
        case 'subtract':
            return subtract(firstOperand, secondOperand);
        case 'multiply':
            return multiply(firstOperand, secondOperand);
        case 'divide':
            return divide(firstOperand, secondOperand);
    }
}


let firstNumber = 0;
let secondNumber = 0;
let operator = "+";