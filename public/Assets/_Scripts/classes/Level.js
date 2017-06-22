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
    this.obstacles[this.obstacles.length] = new Wall(200, 510, 80, 80, "wall", true, "Assets/images/wall.png");
    this.obstacles[this.obstacles.length] = new Wall(850, 300, 50, 50, "wall", true, "Assets/images/wall.png");
    //this.obstacles[this.obstacles.length] = new Wall(500, 350, 250, 50, "wall", true, "Assets/images/wall.png");
    this.obstacles[this.obstacles.length] = new Wall(500, 350, 250, 50, "platform", true, "Assets/images/platform.png");
    this.obstacles[this.obstacles.length] = new Wall(500, 600, 1000, 100, "ground", true, "Assets/images/grass.png");

  }

  draw(ctx){for(let i = 0; i < this.obstacles.length; i++) this.obstacles[i].draw(ctx)}
  get colliders(){return this.obstacles;};
}
