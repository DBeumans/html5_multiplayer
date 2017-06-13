class Game
{
  constructor()
  {
    this.players = [];
  }

  addPlayer(player)
  {
    this.players.push(player);
  }

  removePlayer(playerId)
  {
    for (let i = 0; i < this.players.length; i++)
    {
      if(this.players[i].id == playerId)
        this.players.splice(i, 1);
    }
  }

  updatePlayer(player)
  {
    for(let i = 0; i < this.players.length; i++)
    {
      if(this.players[i].id != player.id)
        continue;
      this.players[i].x = player.x;
      this.players[i].y = player.y;
    }
  }

  getPlayerNameById(playerId)
  {
    for (let i = 0; i < this.players.length; i++)
    {
      if(this.players[i].id == playerId)
        return this.players[i].name;
    }
  }
};
module.exports = Game;
