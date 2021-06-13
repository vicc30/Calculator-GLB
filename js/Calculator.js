export default class Calculator {
    constructor(previousText, currentText) {
        this.previousText = previousText;
        this.currentText = currentText;
        this.clear();
    }

    clear() {
        this.currentText = "";
        this.previousText = "";
        this.operation = undefined;
    }

    delete() {
        this.currentText = this.currentText.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentText.includes('.')) return;
        if (this.currentText.length >= 25) return;
        this.currentText += number.toString();
    }

    toggleSign() {
        if(this.currentText){
            const toNumber = parseFloat(this.currentText);
            this.currentText = (toNumber * -1).toString();
        }
    }

    chooseOperation(operation) {
        if (this.currentText === '') return;
        if (this.currentText !== 0) this.compute();
        this.operation = operation;
        this.previousText = this.currentText;
        this.currentText = "";
    }

    compute() {

        const prev = parseFloat(this.previousText);
        const current = parseFloat(this.currentText);
        let computation;
        if (isNaN(prev) || isNaN(current)) return;

        if (this.operation === '+') computation = prev + current;
        else if (this.operation === '-') computation = prev - current;
        else if (this.operation === 'x') computation = prev * current;
        else if (this.operation === '÷') computation = prev / current;
        else if (this.operation === '%') computation = prev / 100;
        else return;
        this.currentText = computation;
        this.operation = undefined;
        this.previousText = '';
    }

    updateDisplay() {
        const current = document.getElementById("current");
        const previous = document.getElementById("previous");
        current.innerHTML = this.currentText;
        if (this.operation != null) {
            previous.innerHTML = `${this.previousText} ${this.operation}`;
        } else {
            previous.innerHTML = '';
        }
    }
}