const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);


class Field {
  constructor(field) {
    this.field = field;
    this.currentPosition = [0,0];

  }


    print() {
        return this.field.map(row =>
            row.join('')
        ).join('\n');
    }

  static generateField(height, width, holes) {

  }

playGame() {
  this.print();
}


}


newGame.playGame();