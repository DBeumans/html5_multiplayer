const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res)=>{res.sendFile('index.html');});
io.on('connection', client =>
{
  client.send(client.id);
  client.on('updateValues', playerData => client.broadcast.emit('updateValues', playerData));
  client.on('disconnect', ()=> client.broadcast.emit('playerLeave', client.id));
});
