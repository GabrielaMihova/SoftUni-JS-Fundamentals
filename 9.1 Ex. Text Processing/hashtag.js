function hashtag (str) {
    const words = str.split(' '); 
    // Split the string into an array of words
    const specialWords = words.filter(word => word.startsWith('#') 
    && /^[a-zA-Z]+$/.test(word.slice(1)));
     // Filter out non-special words and invalid special words
    specialWords.forEach(word => console.log(word.slice(1))); 
    // Print out the special words without the '#' label
  }
hashtag ('Nowadays everyone uses # to tag a #special word in #socialMedia');

/*
word.slice(1) is used to remove the # symbol from the beginning of the 
special word.

/^[a-zA-Z]+$/ is a regular expression pattern that matches one or more 
uppercase or lowercase letters from A to Z. The ^ and $ symbols indicate 
the beginning and end of the string respectively.

So /^[a-zA-Z]+$/.test(word.slice(1)) checks if the sliced word (without 
the # symbol) contains only letters (no other characters, spaces or numbers).

The && operator combines this condition with the startsWith() method 
which checks if the word starts with #, so the filter method will 
only keep words that start with # and contain only letters after the # symbol.




*/