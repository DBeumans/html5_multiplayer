class Player
{
  constructor(index, id, name, x, y, width, height, playerSpeed)
  {
    this.index = index;
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
  }
}
