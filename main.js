
const Field = require('./field');
const { movePlayerpos } = require('./movement');
const ansiCursor = require('./ansiCursor');

const pos = ansiCursor.Pos;

//sprites
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const playerSprite = '*';

//initialises field object
const field = new Field();

//clear console
console.clear();

//debug
process.stdout.write(pos(20, 20) + field.playerPos);
process.stdout.write(pos(20, 21));
console.log(field.holePoses);


//initialise map and player and instructions
process.stdout.write(pos(1,1) + field.returnFieldStr() + pos(1,1) + '*' + pos(1, 9) + 'press WASD: ' + pos(1,1)); // ESC[0m

async function main() {

  try {

    process.stdin.setRawMode(true); // Enable raw mode for reading each keystroke

    await process.stdin.on('data', function (key) {
      const char = key.toString();

      movePlayerpos(char, field);

      if (char === '\u0003') {
        // If Ctrl+C is pressed, exit gracefully
        process.stdout.write('\n'); // Move to the next line
        process.exit();
      };
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

main();





