function rounding (number, precission) {
    if (precission > 15) {
        precission = 15;
    }

    console.log(parseFloat(number.toFixed(precission)));
}
rounding (10.5,3)