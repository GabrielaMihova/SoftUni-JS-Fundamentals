function storage (input) {
    let dict = new Map();

    for (let el of input) {
        let tokens = el.split(" ");
        let item = tokens[0];
        let quantity = Number(tokens[1]);
        if (dict.has(item)) {
            let currQuantity = dict.get(item);
            dict.set(item, currQuantity + quantity);
        } else {
            dict.set(item, quantity);
        }
    }

    for (let [key, value] of dict) {
        console.log(`${key} -> ${value}`);
    }
}
storage (['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);