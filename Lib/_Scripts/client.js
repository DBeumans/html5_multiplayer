const socket = io();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const startscreen = new Startscreen("SKANQUE SIMULATOR");
const level = new Level("level1", canvas);
const input = new InputManager();
const sprite = new Image();
//const debug = new Debug();

//const movement = new Movement();

const maxPlayerHeight = 110;
const maxPlayerWidth = 50;
const players = [];

let collision = null;
let spriteHeight;
let spriteWidth;
let me = null;
let playerMovement = null;
window.addEventListener('startGame', ()=>
{
  startscreen.loadingScreen();
  sprite.addEventListener('load',()=>
  {
    spriteWidth = sprite.width*(maxPlayerWidth/sprite.width);
    spriteHeight = sprite.height*(maxPlayerHeight/sprite.height);

    me = new Player(players.length, startscreen.name, 100, 100, spriteWidth, spriteHeight);
    collision = new BoxCollision(me);
    playerMovement = new Movement(me);
    startscreen.destroy();
    socket.emit('join', me);
    setInterval(loop, 25);
  });
  sprite.src = "Lib/images/test.png";
});

socket.on('updatePlayers', (data)=>
{
  players.splice(0, players.length);
  for(let i = 0; i < data.length; i++)players[i] = data[i];
});


function loop()
{
  playerMovement.movementUpdate();
  if(collision != null)
  {
    const levelColliders = level.colliders;
    for(let i = 0; i < levelColliders.length; i++)
      collision.checkCollision(levelColliders[i]);
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
    //players[i].draw(ctx);
    ctx.drawImage(sprite, players[i].x - spriteWidth/2, players[i].y - spriteHeight/2, spriteWidth, spriteHeight);
    ctx.fillStyle = "white";
    ctx.fillText(players[i].name, players[i].x - players[i].name.length * 2, players[i].y - 60);
    level.draw(ctx);
  }
}
