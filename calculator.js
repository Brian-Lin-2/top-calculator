let num1 = null;
let operator = null;
let num2 = null;

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
    calcDisplay.textContent = value;
}

const calculate = () => {
    num2 = calcDisplay.textContent;
    console.log(num1 + " " + operator + " " + num2);
    let result = operate(operator, num1, num2);
    calcDisplay.textContent = result;
}

const numKeys = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operator");
const enterKey = document.querySelector(".calculator__enter");
const clear = document.querySelector(".calculator__clear");
const calcDisplay = document.querySelector(".calculator__display");

numKeys.forEach((key) => {
    // addEventListener only accepts anonymous functions.
    key.addEventListener("click", () => {
        display += key.textContent;
        changeDisplay(display);
    });
});

// operators.forEach((key) => {
//     key.addEventListener("click", () => {
//         if (num1 === null) {
//             // Save first key pressed.
//             num1 = calcDisplay.textContent;
//             operator = key.textContent.trim();
//         }

//         else {
//             calculate();
//         }
//     });
// });

// enterKey.addEventListener("click", calculate);