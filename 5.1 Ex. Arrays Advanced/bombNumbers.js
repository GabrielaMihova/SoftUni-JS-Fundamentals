function bombNumbers(sequence, bombInfo) {
    let specialNum = bombInfo[0];
    let power = bombInfo[1];
  
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === specialNum) {
            let leftIndex = Math.max(i - power, 0);
            let rightIndex = Math.min(i + power, sequence.length - 1);
            sequence.splice(leftIndex, rightIndex - leftIndex + 1);
            i = leftIndex - 1;
        }
    }
  
    return sequence.reduce((sum, num) => sum + num, 0);
}

console.log (bombNumbers ([1, 2, 2, 4, 2, 2,

    2, 9],
    
    [4, 2]));

/*
The function takes two arrays as input: sequence and bombInfo. 
The bombInfo array contains the special bomb number and its power. 
The function iterates over the elements of sequence and checks if 
the current element is equal to the special bomb number. 
If it is, the function calculates the range of numbers to be removed
 based on the power, and then uses the splice() method to remove them. 
 Finally, the function returns the sum of the remaining elements in 
 the sequence by using the reduce() method.
*/