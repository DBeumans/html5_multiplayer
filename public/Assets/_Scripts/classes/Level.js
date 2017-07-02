class Level
{
  constructor(id, canvas)
  {
    this.id = id || "level";
    this.obstacles = [];
    this.ambience = [];
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

    this.ambience.push(new Prop("Assets/images/cow.png", 100, 85, 130, 90, "dancing guy", true, {hAmount:8, vAmount: 8, start: 0, end: 59}));
  }

  draw(ctx)
  {
    for(let i = 0; i < this.obstacles.length; i++) this.obstacles[i].draw(ctx);
    for(let i = 0; i < this.ambience.length; i++) this.ambience[i].draw(ctx);
  }
  get colliders(){return this.obstacles;};
}
