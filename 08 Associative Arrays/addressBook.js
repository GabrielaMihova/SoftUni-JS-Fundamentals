function addressBook (input) {
    let addBook = {};

    for(let el of input) {
        let tokens = el.split(":");
        let name = tokens[0];
        let address = tokens[1];
        addBook[name] = [address];
    }

    let entries = Object.entries(addBook).sort((a,b) => a[0].localeCompare(b[0]));

    for(let [name, address] of entries) {
        console.log(`${name} -> ${address}`)
    }

}
addressBook (['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);