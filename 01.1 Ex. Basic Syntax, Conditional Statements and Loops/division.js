function rounding(num){

    let div = [10,7,6,3,2];

    for (i = 0; i <= 5; i++) {

        let a = div.shift();

        if (num % a === 0) {

           

            console.log(`The number is divisible by ${a}`);

            break;

        } else if (i === 5) {

            console.log(`Not divisible`)

        }

    }

}
rounding (12);