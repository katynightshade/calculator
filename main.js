const opsDisplay = document.querySelector('.top-display');
const numberDisplay = document.querySelector('.bottom-display');
let number1 = '';
let number2 = '';
let operator = '';
let manipulator = '';


/*let operator = {
  '+': document.getElementById('+'),
  '-': document.getElementById('-'),
  '*': document.getElementById('x'), 
  '/': document.getElementById('÷'),
}*/





function add(a, b) {
  let ans = a + b;
  return ans;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Try Again!";
  } else {
    return a / b;
  };
}

function operate(num1, num2, operator) {
  if (operator == '+') {
    return add(num1, num2);
  } 
  if (operator == '-') {
    return subtract(num1, num2);
  } 
  if (operator == '*') {
    return multiply(num1, num2);
  } 
  if (operator == '/') {
    return divide(num1, num2);
  }
}

function checkMath() {
  if (numberDisplay.textContent.includes('Infinity') || numberDisplay.textContent.includes('NaN')) {
    numberDisplay.textContent = 'I am but a mere calculator.';
  };
}

let array = [number1, operator, number2];

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
});
  
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