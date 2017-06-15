class Player
{
  constructor(id, name, x, y, width, height, playerSpeed, sprite)
  {
    this.id = id;
    this.name = name || "Shithead";
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.playerSpeed = playerSpeed || 10;
    this.playerVelocityX = 0;
    this.playerVelocityY = 0;
    this.playerFriciton = 0.9;

    this.sprite = sprite || "Lib/images/player.png";

  }

  draw(ctx)
  {
    ctx.drawImage(this.sprite, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    ctx.fillText(this.name, this.x - this.name.length * 2, this.y - 60);
  }
}
