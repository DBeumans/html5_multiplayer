class Level
{
  constructor(id, canvas)
  {
    this.id = id || "level";
    this.obstacles = [];
    canvas.style.backgroundImage = 'url(Assets/images/background.jpg)';
    this.createWalls();
  }

  createWalls()
  {
    this.obstacles[this.obstacles.length] = new Wall(200, 520, 80, 80, "ground", "Assets/images/wallSprite.png");
    this.obstacles[this.obstacles.length] = new Wall(300, 430, 80, 80, "ground", "Assets/images/wallSprite.png");
    this.obstacles[this.obstacles.length] = new Wall(500, 380, 200, 50, "ground", "Assets/images/wallSprite.png");
    this.obstacles[this.obstacles.length] = new Wall(500, 600, 1000, 100, "ground", "Assets/images/grass.png");
  }

  draw(ctx)
  {
    for(let i = 0; i < this.obstacles.length; i++) this.obstacles[i].draw(ctx);
  }

  get colliders()
  {
    return this.obstacles;
  };
}
