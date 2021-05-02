let userName = 'Katherine';

userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");

//printout : Hello, Katherine

let userQuestion = "Could you answer my question?";


console.log(`The user asked: ${userQuestion}`);

//printout : The user asked: Could you answer my question?

let randonNumber = Math.floor(Math.random() * 8);


let eightBall = '';
switch(randonNumber){
  case 0:
    eightBall = 'It is certain' ;
    break ; 
  case 1:
    eightBall = 'It is decidedly so' ;
    break ;
  case 3:
    eightBall = 'Reply hazy try again' ;
    break ;
  case 4:
    eightBall = 'Cannot predict now' ;
    break ;
  case 5:
    eightBall = 'Do not count on it' ;
    break ;
  case 6:
    eightBall = 'My sources say no' ;
    break ;
  case 7:
    eightBall = 'Outlook not so good' ;
    break ;
  case 8:
    eightBall = 'Signs pointt to yes'
    break ;
}

console.log(eightBall);

//printout : My sources say no