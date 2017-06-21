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
    this.obstacles[this.obstacles.length] = new Wall(200, 500, 120,120, "wall", true, "Assets/images/wall.png");
    this.obstacles[this.obstacles.length] = new Wall(500, 500, 25, 200, "wall", true, "Assets/images/wall.png");
    this.obstacles[this.obstacles.length] = new Wall(500, 600, 1000, 100, "ground", true, "Assets/images/grass.png");

  }

  draw(ctx){for(let i = 0; i < this.obstacles.length; i++) this.obstacles[i].draw(ctx)}
  get colliders(){return this.obstacles;};
}
