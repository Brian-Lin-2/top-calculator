let num1;
let operator;
let num2;

let display = "";

const add = (num1, num2) => {
    return num1 + num2;
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

    else if (operator === "*") {
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

const numKeys = document.querySelectorAll("button");
const calcDisplay = document.querySelector(".calculator__display");

numKeys.forEach((key) => {
    // addEventListener only accepts anonymous functions.
    key.addEventListener("click", () => {
        changeDisplay(key.textContent);
    });
});