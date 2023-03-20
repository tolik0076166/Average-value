//I ask the user for three numbers
let firstNumber = prompt('Enter the first number');
let secondNumber = prompt('Enter the second number');
let lastNumber = prompt('Enter the last number')

//Convert the entered data into numbers
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
lastNumber = Number(lastNumber);

//I calculate the average value and write the calculated value to a variable
let result = (firstNumber + secondNumber + lastNumber) / 3;

//Display the results using an alert
alert(`Average value ${firstNumber},${secondNumber},${lastNumber} is ${result}`)