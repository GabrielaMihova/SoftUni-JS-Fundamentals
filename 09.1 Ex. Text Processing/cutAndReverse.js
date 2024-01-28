function cutAndReverse(str) {
    const length = str.length;
    const middle = Math.floor(length / 2);
    let left = '';
    let right = '';

    for (let i = middle - 1; i >= 0; i--) {
        right += str[i];
    }

    for (let i = length - 1; i >= middle; i--) {
        left += str[i];
    }

    console.log(right);
    console.log(left);
}

cutAndReverse ('tluciffiDsIsihTgnizamAoSsIsihT');