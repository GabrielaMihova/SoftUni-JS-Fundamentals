function printChar (string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string.charAt(i));
    }
}
printChar ('AWord');


// second way:
// for (let ch of string) {
//   console.log(ch); 
//}