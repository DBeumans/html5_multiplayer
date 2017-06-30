class Level
{
  constructor(id, canvas)
  {
    this.id = id || "level";
    this.obstacles = [];
    canvas.style.backgroundImage = 'url(Assets/images/background.jpg)';
    this.createObstacles();
  }

  createObstacles()
  {
    this.obstacles[this.obstacles.length] = new Wall(500, 350, 200, 30, "platform", true, "Assets/images/platform-2.png");
    this.obstacles[this.obstacles.length] = new Wall(200, 200, 130, 30, "platform", true, "Assets/images/platform-2.png");
    this.obstacles[this.obstacles.length] = new Wall(700, 520, 80, 80, "crate", true, "Assets/images/crate.png");
    this.obstacles[this.obstacles.length] = new Wall(780, 520, 80, 80, "crate", true, "Assets/images/crate.png");
    this.obstacles[this.obstacles.length] = new Wall(740, 440, 80, 80, "crate", true, "Assets/images/crate.png");
    this.obstacles[this.obstacles.length] = new Wall(500, 600, 1000, 100, "ground", true, "Assets/images/grass.png");

  }

  draw(ctx){for(let i = 0; i < this.obstacles.length; i++) this.obstacles[i].draw(ctx)}
  get colliders(){return this.obstacles;};
}
