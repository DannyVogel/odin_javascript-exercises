const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	let result = 0
  arr.forEach(item => result+=item)
  return result
};

const multiply = function(arr) {
  let result = 1
  for(let i=0; i<arr.length; i++){
    result *= arr[i]
  }
  return result
};

const power = function(num1, num2) {
	let result = 1;
  for(let i=0; i<num2; i++){
    result *= num1
  }
  return result 
};

const factorial = function(num) {
	let result = 1
  for(let i=1; i<=num; i++){
    result *= i
  }
  return result 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
