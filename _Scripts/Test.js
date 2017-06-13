const socket = io();
var me = null;
socket.on('connect',()=>
{
  me = new Player(socket.id, "PlayerGuy", 30, 20);
  socket.emit('join', me);
  setInterval(loop, 50);
});

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function loop()
{
  socket.emit('loop', me);
}

socket.on('sync', (playerData)=>
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < playerData.length; i++)
  {
    ctx.beginPath();
    ctx.arc(playerData[i].x, playerData[i].y, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
  }
});
