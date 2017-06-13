const express = require('express');
const app = express();
const server = app.listen(3000);
const io = require('socket.io')(server);
const Game = require('./Lib/_Scripts/Game.js');

app.use(express.static(__dirname));
app.get('/', (req, res)=>{res.sendFile(__dirname + '/index.html');});

const game = new Game();
io.on('connection', (client)=>
{
  client.send(client.id);
  client.on('join', (player)=>
  {
    game.addPlayer(player);
    console.log(player.name + " joined!");
  });

  client.on('loop', (playerData)=>
  {
    if(playerData == undefined)
      return;

    game.updatePlayer(playerData);
    client.emit('sync', game.players);
    client.broadcast.emit('sync', game.players);
  });

  client.on('disconnect', ()=>
  {
    console.log(game.getPlayerNameById(client.id) + " left");
    game.removePlayer(client.id);
  });
});
