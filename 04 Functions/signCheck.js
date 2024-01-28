function signCheck (num1, num2, num3) {
    let sign = 'Positive';
    let isNumNegative = num1 < 0;
    sign = checkAndChangeSigns (sign, isNumNegative);
    let isNum2Negative = num2 < 0;
    sign = checkAndChangeSigns (sign, isNum2Negative);
    let isNum3Negative = num3 < 0;
    sign = checkAndChangeSigns (sign, isNum3Negative);
    return sign;

    function checkAndChangeSigns (sign, shouldChange) {
        if (shouldChange === false) {
            return sign;
        }

        if (sign === 'Positive') {
            sign = 'Negative';
        } else {
        sign = 'Positive';
        }
        return sign;
    }
}
console.log(signCheck (5, 12, -15))