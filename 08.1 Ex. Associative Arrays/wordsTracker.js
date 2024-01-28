function wordsTracker (data) {
    let result = {}; // result = new Map ();
    let words = data.shift().split(" ");

    for (let word of words) {
        result[word] = 0; // result.set(word, 0);
    }

    for (let word of data) {
        if (result.hasOwnProperty(word)) { // if (result.has(word)) {
            result[word] += 1;  // result.get(word, result.get(word) + 1);
        }
    }

    let sortedArr = Object.entries(result).sort((a, b) => b[1] - a[1]);
    // let sortedArr = Array.from(result).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedArr) {
        console.log(`${key} - ${value}`);
    }
}
wordsTracker ([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);