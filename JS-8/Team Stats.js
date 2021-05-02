const team = {
  _players: [
    {firstName: "Pablo", lastName: "Sanchez", age: 25},
    {firstName: "Michael", lastName: "Nazareth", age: 28},
    {firstName: "Robert", lastName: "Pattison", age: 24},
  ],

  _games: [
    {opponent: "Broncos", teamPoints: 42, opponentPoints: 27},
    {opponent: "Minnesota", teamPoints: 50, opponentPoints: 30},
    {opponent: "Brooklyn", teamPoints: 48, opponentPoints: 28},
  ],
  
  get players() {
  return this._players;
  },
  
  get games() {
  return this._games;
  },

addPlayer(firstName, lastName, age) {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  this.players.push(player);
},
  
  addGame(oppName, points, oppPoints) {
    const game = {
      opponent: oppName,
      points: points,
      opponentPoints: oppPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Ada', 'Beviry', 30);
team.addPlayer('Cathy', 'Dorly', 25);

console.log(team.players);

team.addGame('Titans', 100, 98);
team.addGame('Rookie', 60, 88);
team.addGame('Bull', 30, 58);

console.log(team.games);
