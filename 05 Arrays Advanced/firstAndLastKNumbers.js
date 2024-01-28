function firstAndLastKNumbers (array) {
    let count = array[0];

    array = array.slice(1);
    let array2 = array.slice(1);

    let arr1 = array.splice(0, count);
    let arr2 = array2.splice(array2.length - count);

    console.log(arr1.join(' '));
    console.log(arr2.join(' '));
}
firstAndLastKNumbers ([2,

    7, 8, 9]);


/*
let count = array[0];: The first element of the input array is assigned to a variable count. count represents the number of elements that we want to extract from the input array.

array = array.slice(1);: The input array is sliced starting from the second element, and the result is assigned back to the array variable. This effectively removes the first element of the input array, which was used to determine the value of count.

let array2 = array.slice(1);: Another variable array2 is created that is a copy of the array variable, but starting from the second element.

let arr1 = array.splice(0, count);: The splice function is used to extract count number of elements from the beginning of the array variable and assign them to a new variable arr1.

let arr2 = array2.splice(array2.length - count);: The splice function is used to extract count number of elements from the end of the array2 variable and assign them to a new variable arr2.

console.log(arr1.join(' '));: The join function is used to convert the elements of arr1 into a string, separated by spaces, and the resulting string is logged to the console.

console.log(arr2.join(' '));: The join function is used to convert the elements of arr2 into a string, separated by spaces, and the resulting string is logged to the console.
*/