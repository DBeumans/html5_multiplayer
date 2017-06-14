class CollisionDetection
{
  constructor(object)
  {
    this.object = object;
  }

  checkCollision(objectToCheck, prevPos)
  {
    if(objectToCheck.id == this.object.id)
      return;

    let leftSide = (objectToCheck.x - (objectToCheck.width/2));
    let rigtSide = (objectToCheck.x + (objectToCheck.width/2));
    let upSide = (objectToCheck.y + (objectToCheck.height));
    let downSide = (objectToCheck.y - (objectToCheck.height));

    if(this.object.x > leftSide && this.object.x < rigtSide && this.object.y < upSide && this.object.y > downSide)
    {
      this.object.x = prevPos.dx;
      this.object.y = prevPos.dy;
    }
  }
}
