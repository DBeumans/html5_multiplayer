const express = require('express');
const app = express();
const server = app.listen(3000);
const io = require('socket.io')(server);
const Game = require('./Lib/Game.js');
const game = new Game();

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res)=>{res.sendFile('index.html');});

io.on('connection', client =>
{
  client.send(client.id);
  client.emit('updatePlayers', game.data);

  client.on('join', player =>
  {
    game.addData(player);
    client.emit('updatePlayers', game.data);
    client.broadcast.emit('updatePlayers', game.data);
  });

  client.on('updateValues', playerData =>
  {
    game.updateData(playerData);
    client.emit('updateValues',game.data);
    client.broadcast.emit('updateValues', game.data);
  });

  client.on('disconnect', ()=>
  {
    game.removePlayer(client.id);
    client.broadcast.emit('updatePlayers', game.data);
  });
});
