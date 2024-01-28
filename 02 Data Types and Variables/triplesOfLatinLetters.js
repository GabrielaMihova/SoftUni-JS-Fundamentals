/*function solve (num) {
     for (let i = 0; i <= num; i++) {
            for (let j = 0; j <= num; j++) {
                for (let k = 0; k <= num; k++) {
                let char1 = String.fromCharCode('a'.charCodeAt(0) + i);
                let char2 = String.fromCharCode('a'.charCodeAt(0) + j);
                let char3 = String.fromCharCode('a'.charCodeAt(0) + k);
                console.log(`${char1}${char2}${char3}`);
                }
            }
     }
}
solve (3);
*/

function solve (n) {
    let num = Number(n)
 
    for (let i = 0; i < num; i++) {
        let firstLetter = String.fromCharCode(97 + i)
        for (let k = 0; k < num; k++) {
            let secondLetter = String.fromCharCode(97 + k)
            for (let j = 0; j < num; j++) {
                let thirdLetter = String.fromCodePoint(97 + j)
                let letter = firstLetter.toString()
                let letterTwo = secondLetter.toString()
                let letterThree = thirdLetter.toString()
                console.log(`${letter}${letterTwo}${letterThree}`)
            }
 
        }
    }
}
solve (3);