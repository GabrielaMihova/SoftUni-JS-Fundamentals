// second way:
function manipulateArrays(array1, array2) {
    const [take, deleteCount, searchNumber] = array2;
    let numbers = array1.slice(0, take);
    numbers.splice(0, deleteCount);
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === searchNumber) {
        count++;
      }
    }
    console.log(`Number ${searchNumber} occurs ${count} times.`);
  }
  manipulateArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 2, 3]);

  /*
  Explanation:
  The code takes two arrays as input: array1 and array2. array2 is expected to contain exactly three numbers.

The first number represents the number of elements to take from array1. This is done using the slice method on array1. The slice method returns a new array containing the specified number of elements from the original array, starting from the first element. So, array1.slice(0, take) takes the first take elements from array1.

The second number in array2 represents the number of elements to delete from the taken elements. This is done using the splice method on the numbers array. The splice method modifies the original array by removing the specified number of elements, starting from the first element. So, numbers.splice(0, deleteCount) removes the first deleteCount elements from the numbers array.

The third number in array2 is the number we are searching for in the manipulated array. This number is stored in the searchNumber variable.

The code then uses a for loop to iterate over the elements in the numbers array. For each element in the array, it checks if the element is equal to searchNumber. If it is, the count variable is incremented.

After the loop has finished, the code prints out the final count in the format "Number {number} occurs {count} times.".
  */