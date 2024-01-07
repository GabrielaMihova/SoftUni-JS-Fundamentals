function personInfo (fName, lName, incomeAge) {
    let myPersonInfo = {
        firstName: fName,
        lastName: lName,
        age: incomeAge,
    }

    /*
    second way:
    let myPersonInfo = {
        fName,
        lName,
        incomeAge,
    }
    */

    /*
    third way:
    let myPersonInfo = {};

    myPersonInfo.firstName = fName;
    myPersonInfo.lastNae = lName;
    */

    return myPersonInfo;
}
console.log(personInfo ("Peter",

"Pan",

"20"));