function mergeArrays (arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
    let valueA = arr1[i];
    let valueB = arr2[i];
    if ( i % 2 === 0) {
    valueA = Number (valueA);
    valueB = Number (valueB);
    }
    let currentResult = valueA + valueB;
    result.push(currentResult);
    }
    
    console.log(result.join(' - '));
}
mergeArrays (['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11']);