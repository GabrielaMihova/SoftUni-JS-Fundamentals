function stringManipulator(input) {
    let string = input.shift();
  
    for (const line of input) {
      if (line === "End") {
        break;
      }
  
      const tokens = line.split(" ");
      const command = tokens[0];
  
      if (command === "Translate") {
        const char = tokens[1];
        const replacement = tokens[2];
        string = string.split(char).join(replacement);
        console.log(string);
      } else if (command === "Includes") {
        const substring = tokens[1];
        const result = string.includes(substring);
        if (result === true || result === false) {
          console.log(result ? "True" : "False");
        } else {
          console.log(result);
        }
      } else if (command === "Start") {
        const substring = tokens[1];
        const result = string.startsWith(substring);
        if (result === true || result === false) {
          console.log(result ? "True" : "False");
        } else {
          console.log(result);
        }
      } else if (command === "Lowercase") {
        string = string.toLowerCase();
        console.log(string);
      } else if (command === "FindIndex") {
        const char = tokens[1];
        const index = string.lastIndexOf(char);
        console.log(index);
      } else if (command === "Remove") {
        const startIndex = Number(tokens[1]);
        const count = Number(tokens[2]);
        string = string.slice(0, startIndex) + string.slice(startIndex + count);
        console.log(string);
      }
    }
  }
  
stringManipulator (["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])
  