
function movementUpdate() {
  if(me != null)
      prevPos = new Vector2(me.x, me.y);

  //Up | W , ArrowUP
  if(input.keys[38] == true || input.keys[87] == true)
  {
    me.playerIsJumping = true;
    if(me.playerVelocityY > -me.playerSpeed)
    {
      me.playerVelocityY--;
    }
  }

  //Down | S , ArrowDOWN
  if(input.keys[40] == true || input.keys[83] == true)
  {
    if(me.playerVelocityY < me.playerSpeed)
    {
      me.playerVelocityY++;
    }
  }

  //Right | D , ArrowRIGHT
  if(input.keys[39] == true || input.keys[68] == true)
  {
    if(me.playerVelocityX < me.playerSpeed)
    {
      me.playerVelocityX++;
    }
  }

  //Left | A , ArrowLEFT
  if(input.keys[37] == true || input.keys[65] == true)
  {
    if(me.playerVelocityX > -me.playerSpeed)
    {
      me.playerVelocityX--;
    }
  }

  me.playerVelocityX *= me.playerFriciton;
  me.playerVelocityY *= me.playerFriciton;

  me.x += me.playerVelocityX;
  me.y += me.playerVelocityY;

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
