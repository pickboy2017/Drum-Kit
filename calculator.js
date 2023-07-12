var num1 = prompt("Enter a number: ");
var num2 = prompt("Enter a second number: ");
function divide(num1, num2) {
  return num1 / num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
var result = calculator(num1, num2, multiplication);
alert(result);
