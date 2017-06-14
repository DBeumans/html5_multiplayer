class BoxCollision
{
  constructor(object)
  {
    this.object = object;
  }

  checkCollision(shapeA, shapeB)
  {
    var vX = shapeA.x - shapeB.x,
        vY = shapeA.y - shapeB.y,
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;


    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights)
    {
      var oX = hWidths - Math.abs(vX), oY = hHeights - Math.abs(vY);
      if (oX >= oY)
      {
        if (vY > 0)
          shapeA.y += oY;
        else
          shapeA.y -= oY;
      }
      else
      {
        if (vX > 0)
          shapeA.x += oX;
        else
          shapeA.x -= oX;
      }
    }
  }
}
