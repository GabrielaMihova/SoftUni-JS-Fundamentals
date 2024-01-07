function sortAnArrayBy2Criteria (input) {
    input.sort((a, b) => {
    if (a.length - b.length == 0) {
        return a.localeCompare(b); 
        // tova proverqva stringove dali sa ednakvi 
        //i vryshta ascending order
    }
    return a.length - b.length
});

 console.log(input.join("\n"));

}
sortAnArrayBy2Criteria (['alpha',

'beta',

'gamma']);