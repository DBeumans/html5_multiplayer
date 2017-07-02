class Prop
{
  constructor(spritePath, width, height, x, y, id, animated, animationInfo)
  {
    this.sprite = new Image();
    this.sprite.addEventListener('load', ()=>
    {
      this.width = width || this.sprite.width;
      this.height = height || this.sprite.height;
      this.x = x || 500;
      this.y = y || 200;
      this.id = id || "prop";
      if(animated)
      {
        this.animated = animated;
        if(animationInfo == null || animationInfo.hAmount == null || animationInfo.vAmount == null ||  animationInfo.start==null || animationInfo.end==null)
        {
          this.animated=false;
          return;
        }

        this.hAmount = animationInfo.hAmount;
        this.vAmount = animationInfo.vAmount;
        this.totalSprites = this.hAmount * this.vAmount;
        this.sw = this.sprite.width/this.hAmount;
        this.sh = this.sprite.height/this.vAmount;
        this.start = animationInfo.start;
        this.end = animationInfo.end;
        this.i = this.start;
      }
    });
    this.sprite.src = spritePath;
  }

  draw(ctx)
  {
    if(this.animated)
    {
      this.drawAnimation(ctx);
      return;
    }
    ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }

  drawAnimation(ctx)
  {
    ctx.drawImage(this.sprite, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
    this.sx = (this.i%this.hAmount)*this.sw;
    this.sy = Math.floor(this.i/this.hAmount)*this.sh;
    this.i++;

    if(this.i > this.end)this.i = this.start;
    if(this.i < this.start)this.i = this.end;
  }
}
