let array = [];

//find new subtraction alg
function subtract(array) {
	return array.reduce((total, current) => total - current, 0);
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

//npm test code
module.exports = {
    subtract,
    sum,
    multiply,
    divide
  };