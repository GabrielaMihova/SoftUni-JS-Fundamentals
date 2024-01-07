function sequence(arr) {
  let longestSequence = [];
  let leftMostIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currentEl = Number(arr[i]);
    let currentSequence = [currentEl];
    for (let j = i + 1; j < arr.length; j++) {
      let nextEl = Number(arr[j]);

      if (nextEl === currentEl) {
        currentSequence.push(nextEl);
      } else {
        break;
      }
    }
    if (currentSequence.length > longestSequence.length) {
      longestSequence = [];
      for (let j = 0; j < currentSequence.length; j++) {
        longestSequence.push(currentSequence[j]);
      }
    } else if (currentSequence.length === longestSequence.length) {
      if (i < leftMostIndex) {
        leftMostIndex = i;
      }
    }
  }
  console.log(longestSequence.join(" "));
}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

/*
simplified version by chat gpt:
function sequence(arr) {
  let longestSequence = [arr[0]];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let currentEl = arr[i];
    let lastEl = currentSequence[currentSequence.length - 1];
    if (currentEl === lastEl) {
      currentSequence.push(currentEl);
      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
    } else {
      currentSequence = [currentEl];
    }
  }
  
  console.log(longestSequence.join(" "));
}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
*/
