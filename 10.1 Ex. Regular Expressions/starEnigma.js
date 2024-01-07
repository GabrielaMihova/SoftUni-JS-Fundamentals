function starEnigma (input) {
    let attackedPlanets = [];
    let destroyedPlanets = [];
  
    let n = Number(input.shift());
  
    for (let i = 0; i < n; i++) {
      let message = input[i];
      let count = (message.match(/[star]/gi) || []).length;
      let decrypted = message.split('').map(c => String.fromCharCode(c.charCodeAt(0) - count)).join('');
  
      let match = decrypted.match(/@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<count>\d+)/);
  
      if (match) {
        let name = match.groups.name;
        let type = match.groups.type;
        let planet = { name, population: Number(match.groups.population), count: Number(match.groups.count) };
  
        if (type === 'A') {
          attackedPlanets.push(planet);
        } else {
          destroyedPlanets.push(planet);
        }
      }
    }
  
    attackedPlanets.sort((a, b) => a.name.localeCompare(b.name));
    destroyedPlanets.sort((a, b) => a.name.localeCompare(b.name));
  
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(p => console.log(`-> ${p.name}`));
  
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(p => console.log(`-> ${p.name}`));
}
starEnigma (['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);