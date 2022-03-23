const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const division = document.getElementById('divide');
const equals = document.getElementById('equal');
let operators = document.querySelectorAll('.operators');

let array = [];

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
}

function keypad() {
  const numbers = document.getElementsByClassName('numbers');
  numbers.addEventListener('click', function(e) {
    console.log(e.numbers.id);
  });
}
keypad();

function operate(operator) {
  operator = operators.id;
  plus.addEventListener('click', () => {
    return sum(array);
  });
  minus.addEventListener('click', () => {
    return subtract(array);
  });
  times.addEventListener('click', () => {
    return multiply(array);
  });
  division.addEventListener('click', () => {
    return divide(array);
  });
}