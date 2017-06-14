const socket = io();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const startscreen = new Startscreen("SKANQUE SIMULATOR");
const wallOne = new Wall(500, 500, 23, 124, "wall");
const input = new InputManager();
const sprite = new Image();
const debug = new Debug();

let collision = null;
const players = [];
let spriteHeight;
let spriteWidth;
let me = null;

sprite.addEventListener('load',()=>
{
  spriteWidth = sprite.width/7;
  spriteHeight = sprite.height/7;

  startscreen.startButton.addEventListener('click',()=>
  {
    me = new Player(players.length, startscreen.nameField.value, 100, 100, spriteWidth, spriteHeight);
    collision = new BoxCollision(me);
    document.body.removeChild(startscreen.startWindow);
    socket.emit('join', me);
    setInterval(loop, 25);
  });
});
sprite.src = "Lib/images/test.png";

socket.on('updatePlayers', (data)=>
{
  players.splice(0, players.length);
  for(let i = 0; i < data.length; i++)players[i] = data[i];
});


function loop()
{
  movementUpdate();
  //Check collision here
  if(collision != null)
  {
    collision.checkCollision(me, wallOne);
  }

  if(me.x < 0 + (spriteWidth/2))me.x = 0 + (spriteWidth/2);
  if(me.x > canvas.width - spriteWidth/2)me.x = canvas.width - spriteWidth/2;
  if(me.y < 0 + (spriteHeight/2))me.y = 0+(spriteHeight/2);
  if(me.y > canvas.height - spriteHeight/2)me.y = canvas.height - spriteHeight/2;
  socket.emit('updateValues', me);
}

socket.on('updateValues', (data)=>
{
  for(let i = 0; i < players.length; i++)
  {
    players[i].x = data[i].x;
    players[i].y = data[i].y;
  }

  draw();
});

function draw()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < players.length; i++)
  {
    ctx.drawImage(sprite, players[i].x - spriteWidth/2, players[i].y - spriteHeight/2, spriteWidth, spriteHeight);
    ctx.fillText(players[i].name, players[i].x - players[i].name.length * 2, players[i].y - 60);
    wallOne.draw(ctx);
  }
}
