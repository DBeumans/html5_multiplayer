const express = require('express');
const app = express();
const server = app.listen(80);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res)=>{res.sendFile('index.html');});
io.on('connection', client =>
{
  client.send(client.id);
  client.on('updateValues', playerData => client.broadcast.emit('updateValues', playerData));
  client.on('disconnect', ()=> client.broadcast.emit('playerLeave', client.id));
});
