function toCamelCase(str){
    let newStr = "";
    if(str){
      let wordArr = str.toString().split(/[-_]+/g);
      for (let i in wordArr){
        if(i > 0){
          newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        }else{
          newStr += wordArr[i]
        }
      }
    }else{
      return newStr
    }
    return newStr;
  }
    console.log(toCamelCase(["the-stealth-warrior"]));

    /*
wordArr[i] gets the word at the current index i of the wordArr array.
.charAt(0) gets the first character of the word as a string.
.toUpperCase() converts the first character to uppercase.
+ concatenates the uppercase first character with the rest of the word.
.slice(1) gets a substring of the word starting from the second character (i.e., the character at index 1) to the end of the word.
The result is a string where the first letter of the original word is capitalized and the rest of the word is unchanged.
    */