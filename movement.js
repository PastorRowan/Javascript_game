
const rgbColor = require('./color');
const ansiCursor = require('./ansiCursor');
const { exit } = require('process');

const rgb_f = rgbColor.Rgb_f;
const rgb_b = rgbColor.Rgb_b;
const resetAll = rgbColor.ResetAll;


const playerSprite = '*';


const up = ansiCursor.Up;
const back = ansiCursor.Back;
const down = ansiCursor.Down;
const forward = ansiCursor.Forward;
const pos = ansiCursor.Pos;

function movePlayerpos(input, field) {
    //const originalTile = 

    if (input === 'w') {
        field.playerPos[1] -= 1; // Move up (decrement y)
        process.stdout.write(back(1) + up(1) + playerSprite);

        process.stdout.write(pos(20, 20) + field.playerPos);
    }
    else if (input === 'a') {
        field.playerPos[0] -= 1;
        process.stdout.write(back(2) + playerSprite);

        process.stdout.write(pos(20, 20) + field.playerPos);
    }
    else if (input === 's') {
        field.playerPos[1] += 1;
        process.stdout.write(back(1) + down(1) + playerSprite);

        process.stdout.write(pos(20, 20) + field.playerPos);
    }
    else if (input === 'd') {
        field.playerPos[0] += 1;
        process.stdout.write(back(1) + forward(1) + playerSprite);

        process.stdout.write(pos(20, 20) + field.playerPos);
    };

    // Check if player's position matches any hole position
    for (const holePos of field.holePoses) {
        if ( (field.playerPos[0] === holePos[0]) &&  (field.playerPos[1] === holePos[1]) ) {
            // Set fellInHole flag to true if player falls into a hole
            const playerPosX = field.playerPos[0];
            const playerPosY = field.playerPos[1];
            console.log(pos(playerPosX, playerPosY) + rgb_f([0 ,0 ,0]) + rgb_b([236, 0, 11]) + 'X' + pos(20, 20) + 'YOU LOSE' + pos(20, 21) + '!!!!!!!!' + pos(20, 22) + '!!!!!!!!' + resetAll());
            process.exit();
        };
    };
};

module.exports = { movePlayerpos, pos: ansiCursor.pos };