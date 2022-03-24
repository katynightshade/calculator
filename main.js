const opsDisplay = document.querySelector('.top-display');
const numberDisplay = document.querySelector('.bottom-display');
let number1 = '';
let number2 = '';
let operator = '';


/*let operator = {
  '+': document.getElementById('+'),
  '-': document.getElementById('-'),
  '*': document.getElementById('x'), 
  '/': document.getElementById('÷'),
}*/



function displayValue() {
  let array = [];
  const numberKeys = document.querySelectorAll('.numbers').forEach(number => {
    number.addEventListener('click', (e) => {
      numberDisplay.textContent = e.target.id;
      array.push(e.target.id);
    });
  });
  const operandKeys = document.querySelectorAll('.operators').forEach(operator => {
    operator.addEventListener('click', (e) => {
      opsDisplay.textContent = array.join('');
      array.push(e.target.id);
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
}
displayValue();

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



//non-functioning code

/*function keypad() {
  const numbers = document.getElementsByClassName('numbers');
  numbers.addEventListener('click', function(e) {
    console.log(e.numbers.id);
  });
}
keypad();*/

/*function subtract(array) {
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