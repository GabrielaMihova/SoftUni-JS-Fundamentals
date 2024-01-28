function sumFirstandLast (arr) {
    //alternative way:
    // let firstElement = arr[0]
    // let lastElement = arr[arr.length - 1];
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    let sum = firstElement + lastElement;
    return sum;
}
console.log(sumFirstandLast(['20', '30', '40']));