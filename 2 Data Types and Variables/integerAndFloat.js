function solve (num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let type = 'Float';
    if (Number.isInteger(sum)) {
        type = 'Integer'
    } 
    console.log(`${sum} - ${type}`);
} 
solve (9, 100, 1.1);

// second way
// if (sum % 1 === 0) integer, else float