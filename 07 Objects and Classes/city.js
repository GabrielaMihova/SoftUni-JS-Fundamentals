function city (obj) {
    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`)
    }

    /*
    second way:
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value})
    }
    */
}
city ({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
    })