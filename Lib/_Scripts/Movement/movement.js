let speed = 5;
let jumpPower = 3;

function movementUpdate() {
  if(input.isKeyDown("left_arrow"))
    console.log("Left");
    if(input.isKeyDown("up_arrow"))
      console.log("up");
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
