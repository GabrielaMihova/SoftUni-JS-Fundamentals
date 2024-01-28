function stringSubstring (word, text) {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();
    const words = lowerCaseText.split(' ');
    const foundWord = words.find(w => w === lowerCaseWord);
    if (foundWord) {
      console.log(foundWord);
    } else {
      console.log(`${word.toLowerCase()} not found!`);
    }
}
stringSubstring ('javascript',
'JavaScript is the best programming language');