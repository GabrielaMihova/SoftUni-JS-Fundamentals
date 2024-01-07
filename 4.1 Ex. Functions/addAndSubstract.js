function addAndSubstarct (a, b, c) {
    
    let sum = sumTwoNumbers (a, b);
    let substract = substractTwoNumbers (sum, c);

    return substract;

    function sumTwoNumbers (a, b) {
        return a + b;
    }

    function substractTwoNumbers (sum, c) {
        return sum - c;
    }
}
console.log(addAndSubstarct(23, 6, 10));