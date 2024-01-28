function pascal(text) {
    let res = [];
    let startIndex = 0;

    for (let i = 0; i < text.length; i++) {
        let ch = text[i];
        if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
            if (startIndex < i) {
                res.push(text.substring(startIndex, i));
            }
            startIndex = i;
        }
    }
    if (startIndex < text.length) {
        res.push(text.substring(startIndex));
    }
    console.log(res.join(", "));
}
pascal ('SplitMeIfYouCanHaHaYouCantOrYouCan');