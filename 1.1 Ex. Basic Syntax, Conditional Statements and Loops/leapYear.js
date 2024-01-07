function leapYear (year) {
    if ((year % 4 === 0 && year % 100 >0) || year % 400 === 0) { 
       console.log("yes"); // also it can be done % 100 !=== 0
    } else {
        console.log("no");
    }
}
leapYear(1984);