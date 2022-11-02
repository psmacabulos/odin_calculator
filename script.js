/**
 * Create functions for the calculator operations.
 * @param {*} a
 * @param {*} b
 * @returns result of the operation
 */
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const reset = () => {
  displayValue = '';
  firstDigit = undefined;
  secondDigit = undefined;
  op = '';
  keyPress.innerText = '';
};
/**
 * Create a function to call the operator based on
 * the given two numbers
 * @param {*} operator
 * @param {*} a
 * @param {*} b
 * @returns result of the operation
 */
const operate = (operator, a = 1, b = 1) => operator(a, b);
let result;
let firstDigit;
let secondDigit;

// get the input and display to screen
let displayValue = '';
const digit = document.querySelectorAll('.digit');
const keyPress = document.querySelector('.keypress');

digit.forEach((el) => {
  el.addEventListener('click', () => {
    if (!(displayValue.includes('.') && el.innerText == '.')) {
      displayValue += el.innerText;
      keyPress.innerText = displayValue;
    }
    if (firstDigit == undefined || op == '') {
      firstDigit = displayValue;
    } else {
      secondDigit = displayValue;
    }
    console.log(`the first digit is ${firstDigit}, second is ${secondDigit}`);
  });
});

// get the operation
const operation = document.querySelectorAll('.operator');
let op = '';
operation.forEach((operator) => {
  operator.addEventListener('click', () => {
    let operate = operator.innerText;
    switch (operate) {
      case '+':
        op = sum;
        break;
      case '-':
        op = subtract;
        break;
      case '*':
        op = multiply;
        break;
      case '/':
        op = divide;
        break;
    }

    displayValue = '';
  });
});

//  perform the operation
const solve = document.querySelector('.solve');
solve.addEventListener('click', () => {
  const result = evaluate();
  keyPress.innerText = !(Math.floor(result) == result)
    ? result.toFixed(2)
    : result;
  firstDigit = result;
});

const evaluate = () => operate(op, +firstDigit, +secondDigit);

// reset
const clear = document.querySelector('.clear');
clear.addEventListener('click', reset);
