function print(start, end) {
    let buffNumber = "";
    let sum = 0;
    for (let i = start; i <= end; i++) {
        buffNumber += i + " ";
        sum += i;
    }
    console.log(buffNumber.trim());
    console.log(`Sum: ${sum}`); // "sum: + sum"
}
print(5, 10);