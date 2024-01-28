function reverse(n, arr) {
    // get first elements from array
    let newArr = [];

    // reverse new arr
    for (let i = n - 1; i >= 0; i--) {
        const element = arr[i];
        // put them in another array
        newArr.push(element);
    }

    // print
    console.log(newArr.join(' '));
}
reverse(3, [10, 20, 30, 40, 50]);