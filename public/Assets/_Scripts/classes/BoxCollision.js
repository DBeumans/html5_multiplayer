class BoxCollision
{
  constructor(object)
  {
    this.object = object;
  }

  checkCollision(objectB)
  {
    const xDifference = this.object.x - objectB.x;
    const yDifference = this.object.y - objectB.y;
    const hWidths = (this.object.width / 2) + (objectB.width / 2);
    const hHeights = (this.object.height / 2) + (objectB.height / 2);

    if (Math.abs(xDifference) < hWidths && Math.abs(yDifference) < hHeights)
    {
      const oX = hWidths - Math.abs(xDifference);
      const oY = hHeights - Math.abs(yDifference);
      if (oX >= oY)
      {
        if (yDifference > 0)
          this.object.y += oY;
        else
          this.object.y -= oY;
      }
      else
      {
        if (xDifference > 0)
          this.object.x += oX;
        else
          this.object.x -= oX;
      }
      return JSON.stringify(objectB);
    }
    return null;
  }
}
