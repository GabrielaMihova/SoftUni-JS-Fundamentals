function messageTranslator(input) {
    const count = Number(input.shift());
  
    for (let i = 0; i < count; i++) {
      const message = input[i];
      const regex = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<text>[a-zA-Z ]{8,})]?$/;
      const match = regex.exec(message);
  
      if (match) {
        const command = match.groups.command;
        const text = match.groups.text;
        let translated = "";
  
        for (let i = 0; i < text.length; i++) {
          translated += text[i].charCodeAt(0) + " ";
        }
  
        console.log(`${command}: ${translated.trim()}`);
      } else {
        console.log("The message is invalid");
      }
    }
  }
  
  messageTranslator (["3",
"!play!:[TheNewSong]",
"!Ride!:[Bike]",
"!Watch!:[LordofTheRings"])