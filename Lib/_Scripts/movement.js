let playerSpeed = 10;
let playerJumpPower = 30;
let playerGravity = .8;
let playerVelocityX = 0;
let playerVelocityY = 0;
let playerFriciton = .9;
let playerIsJumping = false;

function movementUpdate() {
  if(me != null)
      prevPos = new Vector2(me.x, me.y);

  // Jumping | W , ArrowUP
  if(input.keys[38] == true || input.keys[87] == true || input.keys[32] == true)
  {
    if(playerIsJumping == false)
    {
      playerIsJumping = true;
      playerVelocityY = -playerSpeed*2;
    }
  }

  //Right | D , ArrowRIGHT
  if(input.keys[39] == true || input.keys[68] == true)
  {
    if(playerVelocityX < playerSpeed)
    {
      playerVelocityX++;
    }
  }

  //Left | A , ArrowLEFT
  if(input.keys[37] == true || input.keys[65] == true)
  {
    if(playerVelocityX > -playerSpeed)
    {
      playerVelocityX--;
    }
  }

  playerVelocityX *= playerFriciton;
  playerVelocityY += playerGravity;

  me.x += playerVelocityX;
  me.y += playerVelocityY;

//    requestAnimationFrame(movementUpdate);
}

/*
class Movement {
  constructor(speed, jumpPower , InputManager) {
    this.speed = speed || 5;
    this.jumpPower = jumpPower || 3;
    this.input = InputManager || null;
  }

  update() {
    console.log("update");
    if(this.input.isKeyDown("left_arrow"))
    {
      console.log("test");
    }
  }
}
*/
