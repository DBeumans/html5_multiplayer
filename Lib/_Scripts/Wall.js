class Wall
{
  constructor(x, y, w, h, id, image)
  {
    this.x = x;
    this.y = y;
    this.width = (w > 50) ? w : 50;
    this.height = (h > 50) ? h : 50;
    this.sprite = new Image();
    this.sprite.addEventListener('load', ()=>
    {
      this.xAmount = Math.round(this.width / this.sprite.width);
      if(this.xAmount == 0) this.xAmount = 1;
      this.yAmount = Math.round(this.height / this.sprite.height);
      if(this.yAmount == 0) this.yAmount = 1;
      this.spriteWidth = (this.width/(this.xAmount * this.sprite.width)) * this.sprite.width;
      this.spriteHeight = (this.height/(this.yAmount * this.sprite.height)) * this.sprite.width;
    });
    this.id = id || "obstacle";
    this.sprite.src = image || "Lib/images/wallSprite.png";
  }

  draw(ctx)
  {
    let xIndex = this.xAmount/2;
    for(let i = 0; i < this.xAmount; i++)
    {
      const xPos = this.x - (xIndex) * this.spriteWidth;
      let yIndex = this.yAmount/2;
      for(let j = 0; j < this.yAmount; j++)
      {
        const yPos = this.y - (yIndex) * this.spriteHeight;
        ctx.drawImage(this.sprite, xPos, yPos, this.spriteWidth, this.spriteHeight);
        yIndex--;
      }
      xIndex--;
    }
  }
};
