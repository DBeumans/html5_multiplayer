class Movement {
  constructor(input) {
    this.input = input || new InputManager();
    this.movement = new Vector2(0,0);
  }

  movementUpdate(player) {
    //Up | W , ArrowUP
    if(this.input.keys[38] || this.input.keys[87] || this.input.keys[32])
    {
      if(player.playerGrounded && player.playerCanJump)
      {
        player.playerVelocityY = 0;
        player.playerVelocityY = player.playerJumpPower;
        player.playerCanJump = false;
        player.playerGrounded = false;
        audioManager.playClip(jumpSound);
      }
    }
    //Right | D , ArrowRIGHT
    if(this.input.keys[39] || this.input.keys[68] )
    {
      if(player.playerVelocityX < player.playerSpeed)
      {
        player.playerVelocityX++;
      }
    }

    //Left | A , ArrowLEFT
    if(this.input.keys[37] || this.input.keys[65] )
    {
      if(player.playerVelocityX > -player.playerSpeed)
      {
        player.playerVelocityX--;
      }
    }

    player.playerVelocityX *= player.playerFriciton;
    player.playerVelocityY += player.playerGravity;

    if(player.playerGrounded)
    {
      player.playerVelocityY = 0;
      if(player.playerVelocityY<=0)
      {
        player.playerVelocityY = 0;
      }

    }
    player.playerGrounded = false;

    player.x += player.playerVelocityX;
    player.y += player.playerVelocityY;

  }
}
