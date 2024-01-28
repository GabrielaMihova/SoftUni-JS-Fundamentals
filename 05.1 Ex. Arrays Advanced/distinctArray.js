function distinctArray (input) {
    let uniqueArr = [];
    for (let el of input) {
        // if(!uniqueArr.includes(el)) {
            //uniqueArr.push(el);
       // } ili includes ili indexOf polzvash i dvata nachina rabotqt
       // moje i s filter da se napravi
        if (uniqueArr.indexOf(el) === -1) {
            uniqueArr.push(el);
        }
    }
    console.log(uniqueArr.join(" "));
}
distinctArray ([7, 8, 9, 7, 2, 3, 4, 1, 2]);