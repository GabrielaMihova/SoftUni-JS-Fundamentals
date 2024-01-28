function findOdd (A) {
    let numCounter = 0;

    for (let i = 0; i < A.length; i++) {
    numCounter = A.toString().count(i);
    if (numCounter % 2 === 1) {
        console.log(numCounter);
    }
    }
}
findOdd ([1,2,2,3,3,3,4,3,3,3,2,2,1]);