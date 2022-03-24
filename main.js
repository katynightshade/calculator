const opsDisplay = document.querySelector('.top-display');
const numberDisplay = document.querySelector('.bottom-display');
const decimalPoint = document.getElementById('.');
const buttons = document.querySelectorAll('button');
let newInput = '';
let number1 = '';
let number2 = '';
let action = '';
let historyLength = 52;

function roundLongDecimals(answer) {
  if (answer.toString().indexOf('.') !== -1) {
    if (answer.toString().split('.')[1].length > 5) {
      return answer.toFixed(5);
    }
  }
  return answer;
}

function add(a, b) {
  let ans = a + b;
  return roundLongDecimals(ans);
}

function subtract(a, b) {
  let ans = a - b;
  return roundLongDecimals(ans);
}

function multiply(a, b) {
  let ans = a * b;
  return roundLongDecimals(ans);
}

function divide(a, b) {
  if (b === 0) {
    return "Try Again!";
  } else {
    let ans = a / b;
  return roundLongDecimals(ans);
  };
}

function displayHistory(toHistory) {
  if (toHistory === 'plus') {
    opsDisplay.textContent += '+';
  } else if (toHistory === 'minus') {
    opsDisplay.textContent += '-';
  } else if (toHistory === 'multiply') {
    opsDisplay.textContent += 'x';
  } else if (toHistory === 'divide') {
    opsDisplay.textContent += '÷';
  } else if(toHistory === 'equals') {
    opsDisplay.textContent += '=';
  } else {
    opsDisplay.textContent += `${toHistory}`;
  }
}

function displayInput(task, value) {
  if (task === 'add') {
    if (newInput === 'Infinity') {
      newInput = '';
    }
    if (value !== '0' || newInput !== '0') {
      newInput += value;
      numberDisplay.textContent = newInput;
    }
  } else if (task === 'backspace') {
    if (newInput === 'Infinity') {
      newInput = '';
    } else {
      newInput = newInput.slice(0, -1);
    }
    if (newInput.indexOf('.') === -1) {
      decimalPoint.removeAttribute('disabled');
    }
    numberDisplay.textContent = newInput;
  } else if (task === 'clear') {
    newInput = '';
    decimalPoint.removeAttribute('disabled');
    if (value === 'full') {
      number1 = '';
      number2 = '';
      action = '';
      numberDisplay.textContent = '';
      opsDisplay.textContent = '';
    }
  }
}

function operate(operator, num1, num2) {
  displayInput('clear', 0);
  if (operator == 'plus') {
    displayInput('add', add(+num1, +num2));
  } else if (operator == 'minus') {
    displayInput('add', subtract(+num1, +num2));
  } else if (operator == 'multiply') {
    displayInput('add', multiply(+num1, +num2));
  } else if (operator == 'divide') {
    displayInput('add', divide(+num1, +num2));
  } 
  number1 = '';
  number2 = '';
  action = '';
}

function limitCharacters(string, limit) {
  string = '';
  limit = 0;
  return string.substring(0, limit);
}

function handleButtons(button) {
  if (button.classList.contains('numbers')) {
    displayInput('add', button.textContent);
  } else if (button.classList.contains('decimal')) {
    if (newInput.indexOf('.') !== -1) {
      button.setAttribute('disabled', '');
    } else {
      button.removeAttribute('disabled');
      displayInput('add', button.textContent);
    }
  } else if (button.classList.contains('operators')) {
    if (number1 === '' && number2 === '' && action === '' && newInput !== '' && newInput !== '.') {
      number1 = newInput;
      action = button.id;
      displayHistory(number1);
      displayHistory(action, 'operator');
      displayInput('clear', 0);
    } else if (newInput !== '' && number1 !== '' && action !== '' && newInput !== '.') {
      number2 = newInput;
      displayHistory(number2);
      operate(action, number1, number2)
      action = button.id;
      displayHistory(action, 'operator');
      number1 = newInput;
      displayInput('clear', 0);
      //limitCharacters();
    } else if (newInput === '' && number1 !== '' && action === '' && newInput !== '.') {
      displayHistory(number1);
      action = button.id;
      displayHistory(action, 'operator');
      number2 = newInput;
      displayInput('clear', 0);
    } else if (newInput !== '' && number1 !== '' && action === '' && newInput !== '.') {
      number1 = newInput;
      action = button.id;
      displayHistory(number1);
      displayHistory(action, 'operator');
      displayInput('clear', 0);
    }
  } else if (button.classList.contains('equals')) {
    if (newInput !== '' && number1 !== '' && newInput !== '.') {
      number2 = newInput;
      displayHistory(number2);
      displayHistory('=');
      operate(action, number1, number2);
      //limitCharacters();
    }
  } else if (button.classList.contains('backspace')) {
    displayInput('backspace', 0);
  } else if (button.classList.contains('clear-btn')) {
    numberDisplay.textContent = '';
    newInput = '';
  } else if (button.classList.contains('on-btn')) {
    displayInput('clear', 'full');
  }
}

function startCalculator() {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      handleButtons(button);
    });
  });
  document.addEventListener('keyup', (event) => {
    const operators = {
      '+': 'plus',
      '-': 'minus',
      '*': 'multiply',
      '/': 'divide',
    };
    if (!Number.isNaN(+event.key) && event.key !== ' ') {
      document.getElementById(`${event.key}`).click();
    } else if (event.key === 'Backspace') {
      document.getElementById('backspace').click();
    } else if (event.key === 'c') {
      document.getElementById('clear-btn').click();
    } else if (event.key === 'Delete' || event.key === 'Escape') {
      document.getElementById('on-btn').click();
    } else if (event.key === '.') {
      document.getElementById('.').click();
    } else if (event.key === 'Enter') {
      document.getElementById('equals').click();
    } else if (['+', '-', '*', '/'].includes(event.key)) {
      document.getElementById(operators[event.key]).click();
    } else {
      console.log('Not on calculator:', event.key)
    }
  });
  if (opsDisplay.textContent >= historyLength) {
    limitCharacters(opsDisplay.textContent.toString(), 52);
  };
}

startCalculator();