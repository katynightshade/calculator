const opsDisplay = document.querySelector('.top-display');
const numberDisplay = document.querySelector('.bottom-display');
const decimalPoint = document.getElementById('.');
const buttons = document.querySelectorAll('button');
let newInput = '';
let number1 = '';
let number2 = '';
let action = '';

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
      document.getElementById('decimal').click();
    } else if (event.key === 'Enter') {
      document.getElementById('equals').click();
    } else if (['+', '-', '*', '/'].includes(event.key)) {
      document.getElementById(operators[event.key]).click();
    } else {
      console.log('Not on calculator:', event.key)
    }
  });
}

startCalculator();

/*function checkMath() {
  if (numberDisplay.textContent.includes('Infinity') || numberDisplay.textContent.includes('NaN')) {
    numberDisplay.textContent = 'I am but a mere calculator.';
  };
}*/

/*let array = [number1, operator, number2];

const numberKeys = document.querySelectorAll('.numbers').forEach(number => {
  number.addEventListener('click', operate(num1, num2) {
    num1 = number.id;
    num2 = number.id;
    numberDisplay.textContent = num1;
    opsDisplay.textContent = (`${num1}${operator}${num2}`);
  });
});

  
const operandKeys = document.querySelectorAll('.operators').forEach(operator => {
  operator.addEventListener('click', (e) => {
    operator = e.target.id;
    opsDisplay.textContent = array.join('');
    array.push(operator);
    numberDisplay.textContent = (`${operate(number1, number2, operator)}`);

  });
});
  
const clearKey = document.getElementById('clear-btn');
clearKey.addEventListener('click', () => {
  numberDisplay.textContent = '';
});
  
const onKey = document.getElementById('on-btn');
  onKey.addEventListener('click', () => {
    window.location.reload();
});*/
  
//need to be able to identify numbers before backspce is functional



//non-functioning code

/*function keypad() {
  const numbers = document.getElementsByClassName('numbers');
  numbers.addEventListener('click', function(e) {
    console.log(e.numbers.id);
  });
}
keypad();

function subtract(array) {
	return array.reduce((firstItem, nextItem) => firstItem - nextItem);
};

function sum(array) {
  return array.reduce((total, current) => total + current, 0);
};

function multiply(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

function divide(array) {
    return array.length
    ? array.reduce((accumulator, nextItem) =>
    accumulator / nextItem)
    : 0;
}*/

/*function firstArg(input) {
  if (input === '.' && number1.includes('.')) {
    return;
  }
  if (input === 'pos-neg' && numberDisplay.textContent == '') {
    return;
  }
  if (input == 'pos-neg') {
    number1 = -(number1);
    numberDisplay.textContent = number1;
  }
  if (input == 'backspace') {
    number1 = number1.split('');
    number1.pop();
    number1 = number1.join('');
    numberDisplay.textContent = number1;
    return;
  }
  number1 += input;
  numberDisplay.textContent += input;
  checkMath();
}

function secondArg(input) {
  if (number2 == '' && numberDisplay.textContent != '') {
    numberDisplay.textContent = '';
  }
  if (input === '.' && number2.includes('.')) {
    return;
  }
  if (input === 'pos-neg' && numberDisplay.textContent == '') {
    return;
  }
  if (input == 'pos-neg') {
    number2 = -(number2);
    numberDisplay.textContent = number2;
  }
  number2 += input;
  numberDisplay.textContent += input;
}

const numberKeys = document.querySelectorAll('.numbers').forEach(number => {
  number.addEventListener('click', (e) => {
    if (Number.isInteger(e.target.id) || e.target.id == '.' || e.target.id == 'pos-neg') {
      if (operator == '') {
        firstArg(e.target.id);
      } else if (number1 != '' && operator != '') {
        secondArg(e.target.id);
      }
    } else if (!Number.isInteger(e.target.id) && operator == '') {
      numberDisplay.textContent = '';
    }
  });
});*/