const express = require('express');
const app = express();
const server = app.listen(3000);
const io = require('socket.io')(server);

app.use(express.static(__dirname));
app.get('/', (req, res)=>{res.sendFile(__dirname + '/index.html');});
io.on('connection', (socket)=>
{
  console.log('connected');
});
