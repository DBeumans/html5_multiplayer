const socket = io();

const canvas = document.getElementById('canvas');
const fpsDOM = document.getElementById('fps');
const ctx = canvas.getContext('2d');

const startscreen = new Startscreen("SKANQUE SIMULATOR");
const wallOne = new Wall(500, 200, 200, 60);
const framecounter = new Framecounter();
const sprite = new Image();

let prevPos = new Vector2(0, 0);
let collision = null;
let spriteHeight;
const speed = 10;
let spriteWidth;
let me = null;

sprite.addEventListener('load',()=>
{
  spriteWidth = sprite.width/7;
  spriteHeight = sprite.height/7;

  startscreen.startButton.addEventListener('click',()=>
  {
    me = new Player(socket.id, startscreen.nameField.value, 100, 100, spriteWidth, spriteHeight);
    prevPos = new Vector2(me.x, me.y);
    collision = new CollisionDetection(me);
    document.body.removeChild(startscreen.startWindow);
    socket.emit('join', me);
    setInterval(loop, 25);
  });
});
sprite.src = "Lib/images/test.png";

window.addEventListener('keydown', e =>
{
  prevPos = new Vector2(me.x, me.y);
  if(e.keyCode == 37)
    me.x -= speed;
  if(e.keyCode == 38)
    me.y -= speed;
  if(e.keyCode == 39)
    me.x += speed;
  if(e.keyCode == 40)
    me.y += speed;
});

function loop()
{
  if(me.x < 0 + (spriteWidth/2))me.x = 0+(spriteWidth/2);
  if(me.x > canvas.width-spriteWidth)me.x = canvas.width - spriteWidth;
  if(me.y < 0 + (spriteHeight/2))me.y = 0+(spriteHeight/2);
  if(me.y > canvas.height - spriteHeight/2)me.y = canvas.height - spriteHeight/2;
  socket.emit('loop', me);
  framecounter.showfps();
}

  var lastCalledTime;
var fps;
socket.on('sync', (playerData)=>
{
  if(collision != null)
    collision.checkCollision(wallOne, prevPos);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < playerData.length; i++)
  {
    ctx.drawImage(sprite, playerData[i].x-spriteWidth/2, playerData[i].y-spriteHeight/2, spriteWidth, spriteHeight);
    ctx.fillText(playerData[i].name, playerData[i].x - playerData[i].name.length * 2, playerData[i].y - 60);
    wallOne.draw(ctx);
  }
});