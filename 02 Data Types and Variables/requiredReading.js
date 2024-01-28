function solve (pagesInBook, pagesReadInHour, daysForReadingBook) {
    let totalTime = pagesInBook/pagesReadInHour;
    let requiredHours = totalTime/daysForReadingBook;
    console.log(requiredHours);
}
solve (212, 20, 2);