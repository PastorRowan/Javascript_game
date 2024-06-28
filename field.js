




const ansiCursor = require('./ansiCursor');

const pos = ansiCursor.Pos;





const playerSprite = '*';
const hatSprite = '^';







const field = [
              ['*', '░', 'O'],
              ['░', 'O', '░'],
              ['░', '░', '░'],
              ['░', '░', '░'],
              ['O', '░', 'O'],
              ['░', '░', 'O'],
              ['░', 'O', '░'],
              ['░', '░', '░'],
              ['░', '░', '░'],
              ];

function findHolePositions(array) {
    const positions = [];
            
    array.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === 'O') {colIndex
                positions.push([colIndex + 1, rowIndex + 1]); // Push [x, y] position of 'O'rowIndex
                };
            });
        });
        return positions;
    };


class Field {
    constructor() {
        this.initialField = field
        this.playerPos = [1, 1];
        //sets initial pos of hat x y
        this.hatSpritePos = [3, 9];
        this.holePoses = findHolePositions(field);
    }

  returnFieldStr() {
    const innitHatMapX = this.hatSpritePos[0] - 1;
    const innitHatMapY = this.hatSpritePos[1] - 1;

    if ( (innitHatMapX > 2) || (innitHatMapX < 0)) {
        throw new Error('innitHatMapX > 2 which problem too big for map or its negative')
    }
    else if ( innitHatMapY > 8 || (innitHatMapX < 0)) {
        throw new Error('innitHatMapY > 8 which problem too big for map or its negative')
    };  

    const innitField = this.initialField;
    innitField[innitHatMapY][innitHatMapX] = hatSprite;

    const field = innitField.map(row => row.join('')).join('\n');

    return (field);
  }
};


module.exports = Field;