function calculator(num1, op, num2) {
    let result = 0;
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    }
    console.log(result.toFixed(2));
}
calculator(5,

    '+',

    10);