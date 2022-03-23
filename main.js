const opsDisplay = document.querySelector('.top-display');
const numberDisplay = document.querySelector('.bottom-display');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const division = document.getElementById('divide');
const equals = document.getElementById('equal');


/*let operator = {
  '+': add(a, b),
  '-': subtract(a, b),
  '*': multiply(a, b),
  '/': divide(a, b),
  '=': equal,
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
      opsDisplay.textContent = array;
      array.push(e.target.id);
    });
  });
}
displayValue();

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a === 0) {
    return "Try Again!";
  } else {
    return a / b;
  };
}

function operate(a, b, operator) {
  if (operator == '+') {
    return add(a, b);
  } else if (operator == '-') {
    return subtract(a, b);
  } else if (operator == '*') {
    return multiply(a, b);
  } else {
    return divide(a, b);
  }
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