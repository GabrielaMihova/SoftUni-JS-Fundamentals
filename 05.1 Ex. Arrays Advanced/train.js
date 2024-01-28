function train (input) {
    let wagons = input
        .shift()
        .split(" ")
        .map(el => Number(el));

    // for (let i = 0; i < wagons.length; i++) {
        // wagons[i] = Number(wagons[i]);
    // } ili for cikyl ili map nachina i dvata sa edno i syshto

    let maxCapacity = Number(input.shift());

    for (el of input) {
        let command = el.split(" ") //'Add 10' -> 'Add' '10' / '30' -> 30
        if (command[0] === 'Add'){
            wagons.push(Number(command[1]));
        } else {
            let passengers = Number(command[0]);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= maxCapacity) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '))
}
train (['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75']);