function tseamAccount (input) {
    let games = input[0].split(' ');
 
    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i].split(' ');
        let command = currentEl[0];
        let newGame = currentEl[1];
 
        if (command === 'Play') {
            break;
        } else if (command === "Install" && games.includes(newGame) === false) {
            games.push(newGame);
        } else if (command === 'Uninstall' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
        } else if (command === 'Update' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
            games.push(newGame);
        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];
 
            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expandedGame);
            }
        }
    }
 
    console.log(games.join(' '));
}
tseamAccount (['CS WoW Diablo',

'Install LoL',

'Uninstall WoW',

'Update Diablo',

'Expansion CS-Go',

'Play!']);

/*
The tseamAccount function takes an array input as its parameter, 
which contains commands related to a user's game account. 
Here is a step-by-step explanation of what the code is doing:

The first line of the function extracts the list of games owned 
by the user, which is the first element of the input array. 
It converts this string into an array of game names using the split method.

The for loop then goes through each element of the input array, 
starting from the second element. Each element of the input array 
is a command that the function must execute.

For each command, the function extracts the command type 
(the first word of the command) and the game name
(the second word of the command).

The function then checks the command type using a series of if statements.
a. If the command is "Play", the function breaks out of the loop 
and stops processing commands.

b. If the command is "Install" and the game is not already 
in the user's game library, the function adds the game to the library.

c. If the command is "Uninstall" and the game is in the user's game
 library, the function removes the game from the library.

d. If the command is "Update" and the game is in the user's game library,
 the function removes the game from the library and then adds it back 
 to the library (effectively updating its position in the library).

e. If the command is "Expansion" and the base game is in the user's game 
library, the function adds the expansion to the library immediately after the base game.

Finally, the function outputs the updated game library by converting 
the array of game names back into a string and logging it to the console.

In summary, the tseamAccount function processes a series of game-related 
commands and updates a user's game library accordingly.
*/