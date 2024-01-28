function factorialDivision (num1, num2) {
    let firstFactorialNumber = calcFactorialNumber(num1);
    let secondFactorialNumber = calcFactorialNumber(num2);

    function calcFactorialNumber (num) {
        let res = 1;
        for (let i = num; i > 1; i-=2) {
           res *= i * (i - 1);
        }
        return res;   
    }

    console.log((firstFactorialNumber/secondFactorialNumber).toFixed(2));
}
factorialDivision (5,

    2);