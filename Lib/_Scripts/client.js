const socket = io();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startscreen = new Startscreen("SKANQUE SIMULATOR");
var me = null;


startscreen.startButton.addEventListener('click',()=>
{
  me = new Player(socket.id, startscreen.nameField.value, 30, 20);
  document.body.removeChild(startscreen.startWindow);
  socket.emit('join', me);
  setInterval(loop, 50);
});

/*
window.addEventListener('keydown', (e)=>
{
  let speed = 10;
  if(e.keyCode == 37)
    me.x -= speed;
  if(e.keyCode == 38)
    me.y -= speed;
  if(e.keyCode == 39)
    me.x += speed;
  if(e.keyCode == 40)
    me.y += speed;
});
*/

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
    ctx.fillText(playerData[i].name, playerData[i].x-(20), playerData[i].y-25);
    ctx.stroke();
    ctx.closePath();
  }
});
