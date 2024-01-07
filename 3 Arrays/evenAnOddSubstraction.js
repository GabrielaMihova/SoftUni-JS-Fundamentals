function evenAnOddSubstraction (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] =Number ( array[i]);
    }
    let evenSum = 0;
    let oddSum = 0;
    for (let num of array) {
        if (num % 2 ==0) {
            evenSum += num
        } else {
            oddSum += num
        }
    }
    console.log(evenSum - oddSum);
}
evenAnOddSubstraction ([1,2,3,4,5,6]);