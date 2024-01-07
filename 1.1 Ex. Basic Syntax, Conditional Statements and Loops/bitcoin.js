function solve (gold) {
let bitcoin = 11949.16;
let goldGr = 67.51;

let days = 0;
let count = 0;
let totalSum = 0;
 for (let i = 1; i <= days.length; i++) {
    days = Number(input[i]);
    if (days % 3 === 0) {
        totalSum *= 0.70;
    }
 }
 days++;

 totalSum = gold*goldGr;
 
 if (totalSum >= bitcoin) {
    count = bitcoin/11949.16;
    console.log(`Bought bitcoins: ${count}`);
    console.log(`Day of the first purchased bitcoin: ${days}`);
    console.log(`Left money: ${totalSum} lv.`);
 } else if (count < bitcoin) {
    console.log(`Bought bitcoins: ${count}`);
    console.log(`Left money: ${totalSum} lv.`);
 }
}
solve ([100, 200, 300]);