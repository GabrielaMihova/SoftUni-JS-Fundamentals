function arrayModifier(input) {
    let arr = input[0].split(" ").map(Number);
    let commands = input[1].split(" ");
    let index1;
    let index2;
  
    let inputCopy = input.slice(2);
  
    while (commands[0] !== 'end') {
      let command = commands[0];
  
      switch (command) {
        case 'swap':
          index1 = Number(commands[1]); 
          index2 = Number(commands[2]);
          let temp = arr[index1];
          arr[index1] = arr[index2];
          arr[index2] = temp;
          break;
          case 'multiply':
            index1 = Number(commands[1]);
            index2 = Number(commands[2]);
            let first = arr[index1];
            let second = arr[index2];
            arr[index1] = first * second;
            break;          
        case 'decrease':
          arr = arr.map((value) => value - 1);
          break;
      }
      commands = inputCopy.shift().split(" ");
    }
  
    console.log(arr.join(', '));
  }
  
  arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
  
/*
  function solve(input) {
    // Parse all values in the array to int values
    let initialArray = input[0]
    .split(' ')
    .map(Number);

    for (let i = 1; i < input.length; i++) {

        let [command, index1, index2] = input[i].split(' ');

        // Values need to be parsed from string to int
        index1 = Number(index1);
        index2 = Number(index2);

        if (command === 'swap') {
            let first = initialArray[index1];
            let second = initialArray[index2];
            initialArray[index1] = second;
            initialArray[index2] = first;
        }
        if (command === 'multiply') {
            let first = initialArray[index1];
            let second = initialArray[index2];
            initialArray[index1] = first * second;
        }
        if (command === 'decrease') {
            initialArray = initialArray.map(el => el - 1);

            // ERROR
            // Carefull !!! .join will transform array into a string
            // initialArray = initialArray.map(el => el - 1).join(', ');
        }
    }

    // console.log(initialArray)
    return initialArray.join(', ');
}
*/
  
  