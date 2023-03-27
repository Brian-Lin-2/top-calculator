let num1;
let operator;
let num2;

let display = "";

const add = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (operator, num1, num2) => {
    if (operator === "+") {
        return add(num1, num2);
    }

    else if (operator === "-") {
        return subtract(num1, num2);
    }

    else if (operator === "x") {
        return multiply(num1, num2);
    }

    else if (operator === "/") {
        return divide(num1, num2);
    }
}

const changeDisplay = (value) => {
    display += value;
    calcDisplay.textContent = display;
}

const numKeys = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operator");
const enterKey = document.querySelector(".calculator__enter");
const clear = document.querySelector(".calculator__clear");
const calcDisplay = document.querySelector(".calculator__display");

numKeys.forEach((key) => {
    // addEventListener only accepts anonymous functions.
    key.addEventListener("click", () => {
        changeDisplay(key.textContent);
    });
});

operators.forEach((key) => {
    key.addEventListener("click", () => {
        operator = key.textContent.trim();
        changeDisplay(key.textContent);
    });
});

enterKey.addEventListener("click", () => {
    const expression = display.split(operator);
    display = "";
    calcDisplay.textContent = operate(operator, expression[0], expression[1]);
});