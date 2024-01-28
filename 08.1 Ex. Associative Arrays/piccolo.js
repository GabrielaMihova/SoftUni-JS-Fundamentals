function piccolo (data) {
    let parking = new Map(); // let parking = new Set();

    for (let carData of data) {
        let [direction, carNum] = carData.split(", ");
        if (direction ==="IN") {
            parking.set(carNum, ""); // parking.add(carNum);
        } else {
            parking.delete(carNum);
        }
    }

    let sort = Array.from(parking).sort((a, b) => a[0].localeCompare(b[0]));
    // let sort = Array.from(parking).sort((a, b) => a.localeCompare(b));


    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let carNum of sort) {
            console.log(carNum[0]); // console.log(carNum);
        }
    }
}
piccolo (['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);