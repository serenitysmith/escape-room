const player = require('readline-sync');

const playerName = player.question('What is your name?');
console.log(`${playerName}, "Welcome to the Escape Room!`);
let alive = true;
let hasKey = false;

while (alive == true) {
    menuId = player.keyIn(' press 1 to Put hand in hole, press 2 to find the key, or, press 3 to open the door', { limit: '$<1-3>' });
    if (menuId == 1) {
        console.log(`${playerName} Youre Dead!`)
        alive = false
    }
    else if (menuId == 2 && hasKey == false) {
        console.log(`${playerName}, you have found the key, proceed to opening the door.`);
        hasKey = true;
    }
    else if (menuId == 2 && hasKey == true) {
        console.log(`${playerName}, you have the key! stop wasting time and open the door`)
    }
    else if (menuId == 3 && hasKey == true) {
        console.log(`${playerName}, You won`)
        alive = false
    }
}













