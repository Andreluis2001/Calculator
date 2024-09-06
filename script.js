
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
        case '+':
            return add(firstOperand, secondOperand);
        case '-':
            return subtract(firstOperand, secondOperand);
        case '*':
            return multiply(firstOperand, secondOperand);
        case '/':
            return divide(firstOperand, secondOperand);
    }
}


let firstNumber = 0;
let secondNumber = 0;
let operator = "+";
const display = document.querySelector(".display-text");
const keys = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".op");
for (let i = 0; i < keys.length; i++){
        keys[i].addEventListener('click', function(){
            if(display.textContent.length > 25){
                return;
            }
            display.textContent += keys[i].textContent;
        })
}

const clear_button = document.querySelector("#clear");
clear_button.addEventListener("click", function(){
    text_display = "";
    display.textContent = text_display;
    for (let j = 0; j < operators.length; j++){
        operators[j].disabled = false;
    }
});

for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', function(e){
        display.textContent += ' ' + e.target.textContent + ' ';
        for(let j = 0; j < operators.length; j++){
            operators[j].disabled = true;
        }
    })
}

const equals_button = document.querySelector("#equals");
equals_button.addEventListener("click", function(e){
    let operation = display.textContent.split(" ");
    display.textContent = "";
    display.textContent = operate(parseFloat(operation[0]), parseFloat(operation[2]), operation[1]);
    for (let j = 0; j < operators.length; j++){
        operators[j].disabled = false;
    }
})

