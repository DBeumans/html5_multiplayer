class Game
{
  constructor()
  {
    this.data = [];
  }

  addData(playerData){this.data.push(playerData); console.log(playerData.id);}
  updateData(data){this.data[data.id] = data;}

  removePlayer(id){this.data.splice(id, 1);}
};
module.exports = Game;
