class Game
{
  constructor()
  {
    this.data = [];
    console.log(io);
  }

  addData(playerData){this.data.push(playerData);}
  updateData(data)
  {
    this.data[data.index] = null;
    this.data[data.index] = data;
  }

  removePlayer(id)
  {
    for(let i = 0; i < this.data.length; i++)
    {
      if(this.data[i].id == id)
      {
        this.data.splice(i);
        break;
      }
    }

    for(let i = 0; i < this.data.length; i++)
      this.data[i].index = i;
  }
};
module.exports = Game;
