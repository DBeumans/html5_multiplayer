class Movement {
  constructor(player) {
    this.input = new InputManager();
    this.player = player;
    console.log(this.input);
    console.log(this.player);
  }

  movementUpdate() {
    //Up | W , ArrowUP
    if(this.input.keys[38] == true || this.input.keys[87] == true)
    {
      if(this.player.playerVelocityY > -this.player.playerSpeed)
      {
        this.player.playerVelocityY--;
      }
    }

    //Down | S , ArrowDOWN
    if(this.input.keys[40] == true || this.input.keys[83] == true)
    {
      if(this.player.playerVelocityY < this.player.playerSpeed)
      {
        this.player.playerVelocityY++;
      }
    }

    //Right | D , ArrowRIGHT
    if(this.input.keys[39] == true || this.input.keys[68] == true)
    {
      if(this.player.playerVelocityX < this.player.playerSpeed)
      {
        this.player.playerVelocityX++;
      }
    }

    //Left | A , ArrowLEFT
    if(this.input.keys[37] == true || this.input.keys[65] == true)
    {
      if(this.player.playerVelocityX > -this.player.playerSpeed)
      {
        this.player.playerVelocityX--;
      }
    }

    this.player.playerVelocityX *= this.player.playerFriciton;
    this.player.playerVelocityY *= this.player.playerFriciton;

    this.player.x += this.player.playerVelocityX;
    this.player.y += this.player.playerVelocityY;
  }
}
