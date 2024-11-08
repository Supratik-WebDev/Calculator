let display = document.getElementById("display");

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    if (display.value !== "" && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
