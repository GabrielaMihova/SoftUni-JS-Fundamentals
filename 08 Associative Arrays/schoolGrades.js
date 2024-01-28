function schoolGrades(input) {
    let obj = new Map();
  
    for (let el of input) {
      let tokens = el.split(" ");
      let name = tokens[0];
      let grades = tokens.slice(1).map(Number);
  
      if (obj.has(name)) {
        let currentGrades = obj.get(name);
        obj.set(name, currentGrades.concat(grades));
      } else {
        obj.set(name, grades);
      }
    }
  
    let sortedObj = new Map([...obj.entries()].sort()); // Sort map by key (name)
  
    for (let [key, value] of sortedObj) {
      let avg = value.reduce((acc, cur) => acc + cur) / value.length;
      console.log(`${key}: ${avg.toFixed(2)}`);
    }
  }
  
schoolGrades (['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6']);