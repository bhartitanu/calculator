let currentNumber = '';
let previousNumber = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + number.toString();
    updateScreen();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
        default:
            return;
    }
    currentNumber = computation;
    operation = undefined;
    previousNumber = '';
    updateScreen();
}

function clearScreen() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    updateScreen();
}

function deleteNumber() {
    currentNumber = currentNumber.toString().slice(0, -1);
    updateScreen();
}

function updateScreen() {
    document.getElementById('inputbox').value = currentNumber;
}
