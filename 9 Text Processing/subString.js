function substring (str, start, count) {
    let result = str.substr(start, count);
    console.log(result);
}
substring ('ASentence', 1, 8);

/*
let endIndex = start + count;
let res = str.substring(start, endIndex);
console.log(res);
*/