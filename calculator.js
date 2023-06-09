let num1 = null;
let operator = null;
let num2 = null;

let result = -1;

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
    // Prevents overflow.
    return Math.round((num1 / num2) * (10**10)) / 10**10;
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
        if (num2 === 0) {
            return "Insert Snarky Message";
        }

        return divide(num1, num2);
    }
}

const changeDisplay = (value) => {
    // Avoid overflow, only show last 10 digits.
    if (value.length > 12) {
        calcDisplay.textContent = value.substring(value.length - 12, value.length);
    } else {
        calcDisplay.textContent = value;
    }
}

const calculate = () => {
    num2 = parseInt(display);
    display = "";
    result = operate(operator, num1, num2);
    calcDisplay.textContent = result;

    num1 = null;
}

const numKeys = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operator");
const enterKey = document.querySelector(".calculator__enter");
const clear = document.querySelector(".calculator__clear");
const calcDisplay = document.querySelector(".calculator__display");

numKeys.forEach((key) => {
    // addEventListener only accepts anonymous functions.
    key.addEventListener("click", () => {
        display += key.textContent.trim();
        changeDisplay(display);
    });
});

operators.forEach((key) => {
    key.addEventListener("click", () => {
        // Complex calculations:
        if (num1 !== null) {
            calculate();
        }

        // Implies operator was pressed after result is displayed.
        if (display === "") {
            num1 = result;
            operator = key.textContent.trim();
        }

        // Regular calculations:
        else {
            // Save first key pressed.
            num1 = parseInt(display);
            operator = key.textContent.trim();

            // Reset number.
            display = "";
        }
    });
});

enterKey.addEventListener("click", calculate);

clear.addEventListener("click", () => {
    // Set everything to null.
    num1 = null;
    operator = null;
    num2 = null;
    result = -1;
    display = "";

    calcDisplay.textContent = "0";
});