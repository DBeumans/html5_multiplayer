const socket = io();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const startscreen = new Startscreen("SKANQUE SIMULATOR");
const level = new Level("level1", canvas);
const playerMovement = new Movement();
const sprite = new Image();

const maxPlayerHeight = 110;
const maxPlayerWidth = 50;
const players = [];

let collision = null;
let spriteHeight;
let spriteWidth;
let me = null;

window.addEventListener('startGame', ()=>
{
  startscreen.loadingScreen();
  sprite.addEventListener('load',()=>
  {
    spriteWidth = sprite.width*(maxPlayerWidth/sprite.width);
    spriteHeight = sprite.height*(maxPlayerHeight/sprite.height);
    me = new Player(players.length, socket.id, startscreen.name, 100, 100, spriteWidth, spriteHeight);
    collision = new BoxCollision(me);
    players.push(me);
    startscreen.destroy();
    setInterval(loop, 25);
  });
  sprite.src = "Assets/images/test.png";
});

function loop()
{
  playerMovement.movementUpdate(me);
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
  draw();
}

socket.on('updateValues', data =>
{
  for(let i = 0; i < players.length; i++)
  {
    if(players[i].id == data.id)
    {
      players[i] = data;
      return;
    }
  }
  players.push(data);
});

socket.on('playerLeave', playerID =>
{
  for (let i = 0; i < players.length; i++)
  {
    if(players[i].id == playerID)
      players.splice(i, 1);
  }
});

function draw()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < players.length; i++)
  {
    ctx.drawImage(sprite, players[i].x - spriteWidth/2, players[i].y - spriteHeight/2, spriteWidth, spriteHeight);
    ctx.fillStyle = "white";
    ctx.fillText(players[i].name, players[i].x - players[i].name.length * 2, players[i].y - 60);
    level.draw(ctx);
  }
}
