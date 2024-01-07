function triangle(number) {
    for (let row = 1; row <= number; row++) { // log ( 1 + row)
        let buff = "";
        for (let col = 0; col < row; col++) {
            buff += row + " ";
        }
        console.log(buff);
    }
}
triangle(3);