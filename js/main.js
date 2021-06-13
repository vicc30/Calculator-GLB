import Calculator from './Calculator.js';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const acButton = document.querySelector('[data-ac]');
const previousText = document.querySelector('[data-previous]');
const currentText = document.querySelector('[data-current]');
const percentButton = document.querySelector('[data-percent]');
const toggleSign = document.querySelector('[data-toggle]');

const calculator = new Calculator(previousText, currentText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

percentButton.addEventListener('click', (button) => {
    calculator.chooseOperation(button.target.outerText);
    calculator.appendNumber('0');
    calculator.compute();
    calculator.updateDisplay();
});

toggleSign.addEventListener('click', (button) => {
    calculator.toggleSign();
    calculator.updateDisplay();
});

equalButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

acButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});

window.onkeyup = (e) => {
    const regExNum = /([\d.])+/;
    const regExOp = /([\+\-*/])+/
    const regExEqual = /(=)+/;

    const key = e.key;
    if (key.match(regExNum)) {
        calculator.appendNumber(key);
        calculator.updateDisplay();
    } else if (key.match(regExOp)) {
        calculator.chooseOperation(key);
        calculator.updateDisplay();
    } else if (key === '%') {
        calculator.chooseOperation('%');
        calculator.appendNumber('0');
        calculator.compute();
        calculator.updateDisplay();
    } else if (key === 'Backspace') {
        calculator.delete();
        calculator.updateDisplay();
    } 
}