// Get the textbox
let display = document.getElementById("textbox");

// Append the value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display (AC button)
function clearDisplay() {
    display.value = "";
}

// Delete the last character (DE button)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Evaluate the expression (= button)
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
