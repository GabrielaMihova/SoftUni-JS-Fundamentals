/*
function sumDigits (num) {
    let sum = 0;
    numToString = num.toString();
    for (let i=0; i <=numToString.length; i++) {
        sum += numToString[i]
    }
    console.log(sum);
} 
sumDigits (245678);
*/

function sumDigits (num) {
    sum = 0;

while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log(sum);
}
sumDigits (245678);

/*
function sumDigits (num) {
sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

console.log(sum);
    }
sumDigits (245678);
*/
