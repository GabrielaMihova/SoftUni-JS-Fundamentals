function simpleCalculator (num1, num2, op) {
    let result = 0;
switch (op) {
    case 'multiply':
    result = num1 * num2;
    break;
    case 'divide':
        result = num1 / num2;
        break;
    case 'add':
        result = num1 + num2;
        break;
    case 'subtract':
        result = num1 - num2;
        break;
}
console.log(result);
}
simpleCalculator (50,

    13,
    
    'multiply');