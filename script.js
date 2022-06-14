const calculatorScreen = document.querySelector('.calculator-screen');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');
const clearButton = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');

let previousNumber = '';
let currentNumber = '0';
let calculationOperator = '';

const inputNumber = (number) => {
  if (currentNumber == '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    previousNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '';
}

const inputDecimal = (dot) => {
  if (currentNumber.includes(dot)) {
    return;
  }
  currentNumber += dot;
}

const updateScreen = (number) => {
  calculatorScreen.value = number;
}

const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  calculationOperator = '';
  currentNumber = result;
}

const clearAll = () => {
  previousNumber = '';
  calculationOperator = '';
  currentNumber = '0';
}

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});


operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  });
});

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
});

clearButton.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

decimal.addEventListener('click', () => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
