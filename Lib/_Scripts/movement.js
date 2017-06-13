let playerSpeed = 5;
let playerJumpPower = 3;

function movementUpdate() {
  if(me != null)
      prevPos = new Vector2(me.x, me.y);
  if(input.isKeyDown("left_arrow"))
  {
    me.x -= speed;
    console.log("Left");
  }
  if(input.isKeyDown("up_arrow"))
  {
    me.y -= speed;
    console.log("up");
  }
  if(input.isKeyDown("right_arrow"))
  {
    me.x += speed;
    console.log("right");
  }
  if(input.isKeyDown("down_arrow"))
  {
    me.y += speed;
    console.log("down");
  }

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
