class Movement {
  constructor() {
    this.input = new InputManager();
  }

  movementUpdate(player) {
    //Up | W , ArrowUP
    if(this.input.keys[38] == true || this.input.keys[87] == true)
    {
      if(player.playerVelocityY > -player.playerSpeed)
      {
        player.playerVelocityY--;
      }
    }

    //Down | S , ArrowDOWN
    if(this.input.keys[40] == true || this.input.keys[83] == true)
    {
      if(player.playerVelocityY < player.playerSpeed)
      {
        player.playerVelocityY++;
      }
    }

    //Right | D , ArrowRIGHT
    if(this.input.keys[39] == true || this.input.keys[68] == true)
    {
      if(player.playerVelocityX < player.playerSpeed)
      {
        player.playerVelocityX++;
      }
    }

    //Left | A , ArrowLEFT
    if(this.input.keys[37] == true || this.input.keys[65] == true)
    {
      if(player.playerVelocityX > -player.playerSpeed)
      {
        player.playerVelocityX--;
      }
    }

    player.playerVelocityX *= player.playerFriciton;
    player.playerVelocityY *= player.playerFriciton;

    player.x += player.playerVelocityX;
    player.y += player.playerVelocityY;
  }
}
