function matchPhoneNumber (arr) {
    let regex = /\+359([ -])2\1(?:\d{3})\1(?:\d{4})\b/g;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let text = arr[i];
        let match = text.match(regex);
        result = result.concat(match);
    }

    /*
    let stringWithPhoneNumbers = arr.shift();
    let regex = /\+359([ \-])2\1[/d]{3}\1[\d]{4}\b/g;
    let matches = stringWithPhoneNumbers.match(regex);
    console.log(matches.join(", "))
    */

    console.log(result.join(", "));
}
matchPhoneNumber (['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);