const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const socket = io();

const sprite = new Image();
const audioUI = new AudioUI();
const input = new InputManager();
const audioManager = new AudioManager();
const mouseInput = new MouseInput(canvas);
const level = new Level("level1", canvas);
const playerMovement = new Movement(input);
const startscreen = new Startscreen("SKANQUE SIMULATOR", input);
const jumpSound = audioManager.addClip("Assets/audio/sounds/player/jump.wav", false, "fx");
const backgroundSong = audioManager.addClip("Assets/audio/music/background-song.ogg", true, "background");

const players = [];
const maxPlayerWidth = 50;
const maxPlayerHeight = 110;

let me, collision, spriteHeight, spriteWidth;

audioManager.playClip(backgroundSong);
window.addEventListener('startGame', ()=> startGame());

function startGame()
{
  startscreen.loadingScreen();
  sprite.addEventListener('load',()=>
  {
    createPlayer();
    startscreen.destroy();
    setInterval(loop, 25);
  });
  sprite.src = "Assets/images/test.png";
}

function createPlayer()
{
  let factor = 1;
  if(sprite.width > maxPlayerWidth) factor = (maxPlayerWidth/sprite.width)
  spriteHeight = sprite.height*factor;
  spriteWidth = sprite.width*factor;

  me = new Player(players.length, socket.id, startscreen.name, 100, 100, spriteWidth, spriteHeight);
  collision = new BoxCollision(me);
  socket.emit('onJoin', me);
  players.push(me);
}

function loop()
{
  playerMovement.movementUpdate(me);
  if(collision != null)
  {
    const levelColliders = level.colliders;
    for(let i = 0; i < levelColliders.length; i++)
    {
      let colObj = collision.checkCollision(levelColliders[i]);
      var obj = JSON.parse(colObj);
      if(obj == null)
        continue;

      if(obj.isJumpable && obj.objectDir == "top")
      {
        me.playerGrounded = true;
        me.playerCanJump = true;
        me.playerJumpPower = -20;
      }
      if(obj.objectDir == "bottom")me.playerVelocityY *=-0.5;
    }
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
    ctx.drawImage(sprite, players[i].x - spriteWidth/2, players[i].y - spriteHeight/2, players[i].width, players[i].height);
    ctx.fillStyle = "white";
    ctx.fillText(players[i].name, players[i].x - players[i].name.length * 2, players[i].y - 60);
    level.draw(ctx);
  }
}
