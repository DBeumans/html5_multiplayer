class Player
{
  constructor(id, name, x, y, width, height)
  {
    this.id = id;
    this.name = name || "Shithead";
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.playerSpeed = 10;
    this.playerVelocityX = 0;
    this.playerVelocityY = 0;
    this.playerFriciton = 0.9;
    this.playerJumpPower = -19; // negative number to go UP
    this.playerGravity = 1.1;
    this.playerGrounded = false;
    this.playerCanJump = false;

    this.playerDirection = 1;
  }

  draw(ctx , sprite , player)
  {
    ctx.drawImage(sprite,player.width,player.height, player.width, player.height, player.x , player.y , player.width, player.height);
    // ctx.drawImage(sprite, player.x -player.width/2 , player.y - player.height/2, player.width , player.height );
    ctx.fillStyle = '#fff';
    ctx.fillText(player.name, player.x - player.name.length * 2, player.y - 60);
  }
}
