function age (agePerson) {
    if (agePerson < 0) {
        console.log("out of bounds");
    } else if (agePerson >= 0 && agePerson <= 2){
        console.log("baby");
    } else if (agePerson >= 3 && agePerson <= 13) {
        console.log("child");
    } else if (agePerson >= 14 && agePerson <= 19) {
        console.log("teenager");
    } else if (agePerson >= 20 && agePerson <= 65) {
        console.log("adult");
    } else if (agePerson >= 66){
        console.log("elder");
    }

}
age (35);