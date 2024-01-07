function matchFullName (text) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = text.match(regex);
    console.log(result.join(' '));

    // let regex = ...
    // let match = regex.exec(text);
    // elt result = [];
    // while (match !== null) {
    // result.push(match[0]);
    // match = regex.exec(text);
    //}
}
matchFullName ("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");