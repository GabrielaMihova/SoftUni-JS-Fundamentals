function jansNotation(data) {
    let mapper = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        },
        '*': function (a, b) {
            return a * b;
        },
        '/': function (a, b) {
            return a / b;
        }
    }

    let list = []
    for (const el of data) {
        if (typeof el === 'number') {
            list.push(el);
        } else {
            let action = mapper[el];
            if (list.length >= 2) {
                let b = list.pop();
                let a = list.pop();
                list.push(action(a, b));
            } else {
                return 'Error: not enough operands!';
            }
        }
    }

    if (list.length > 1) {
        return 'Error: too many operands!';
    } else {
        return list[0];
    }
}

console.log(jansNotation([3,

    4,

    '+']));

    /*
    Alternative:
    function solve(array) {
    let numbers = [];
    for (const element of array) {
        if (typeof element == 'number') {
            numbers.push(element);
        } else if (numbers.length >= 2) {
            calculate(numbers, element);
        } else {
// If at any point during the calculation you don’t have two numbers saved, 
// the user-supplied too few instructions and you must print "Error: not enough operands!". 
        	console.log('Error: not enough operands!');
          	return;
        }
    }
 
    if (numbers.length > 1) {
        console.log('Error: too many operands!');
      	return;
    } else {
        console.log(numbers.toString());
    }
 
    function calculate(numbers, operator) {
        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
          	return;
        } else {
            let operand2 = numbers.pop();
            let operand1 = numbers.pop();
 
            let result = 0;
            if (operator == '+') {
                result = operand1 + operand2;
            } else if (operator == '-') {
                result = operand1 - operand2;
            } else if (operator == '*') {
                result = operand1 * operand2;
            } else if (operator == '/') {
                result = operand1 / operand2;
            }
            numbers.push(result);
        }
    }
}
    */