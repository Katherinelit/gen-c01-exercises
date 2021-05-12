const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';



class Field {
    constructor(field) {
        this.field = field;
        this.rows = field.length;
        this.columns = field[0].length;
        this.currentPosition = [0,0];
        this.move = '';
        this.victoryMess = ' \nCongrats, you found your hat!!!\n';
        this.inGame = true
    }


//controls tips  
promptUser() {
    const options = ['w','s','d','a']; 
    if ( !(options.some((option) => option === this.move)) ) {
        console.log('Chose either e=[up], s=[down], d=[right], a=[left] of the respective option    e.g. for [up] type "e"');
        this.move = prompt('Which way ?')
    }
}


validMove() {
    if (this.move === 'w' && this.currentPosition[0] === 0) {
        return false;
    } else if (this.move === 'a' && this.currentPosition[1] === 0) {
        return false;
    } else if (this.move === 'd' && this.currentPosition[1] === (this.columns-1)) {       
        return false;
    } else if (this.move === 's' && this.currentPosition[0] === (this.rows-1)) {
        return false;
    } else {
        return true; 
    }
}


movePosition() {
    this.promptUser();
    if (this.move === 's' && this.validMove()) {
        this.currentPosition[0]++;
        return true;
    } else if (this.move === 'd' && this.validMove()) {
        this.currentPosition[1]++;
        return true;
    } else if (this.move === 'a' && this.validMove()) {
        this.currentPosition[1]--;
        return true;
    } else if (this.move === 'w' && this.validMove()) {
        this.currentPosition[0]--;
        return true;
    } else {
        return false;
    }
}



print() {
    const arrToString = this.field.map(row => {
        return row.join('')
    }).join('\n');
    console.log(arrToString)
}


// start the game, aks player wants to play or not 
startInstructions() {
    const Instructions = '\nNavigate to the hat symbol "^" to win using they keys w(up), s(down), a(left) or d(right).\nAvoid falling down to hole or moving out of the playing field.\nYour position is marked by the "*".'
    console.log(Instructions)
    let answer = prompt('\nDo you want to play ? Type yes or no... ')
    if (answer === 'yes') {
        return true
    } else if (answer === 'no') {
        console.log('Fine. Bye Bye your tail !')
        return false;
    } 
}






  static generateField(height, width, holes) {

  }

playGame() {
  this.print();
}


}

const randomField = Field.generateField(10,10,30);
const newGame = new Field(randomField);
newGame.playGame();