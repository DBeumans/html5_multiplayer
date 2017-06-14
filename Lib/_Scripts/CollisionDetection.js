class BoxCollision
{
  constructor(object)
  {
    this.object = object;
  }

  checkCollision(objectToCheck, prevPos)
  {
    if(objectToCheck.id == this.object.id)
      return;

    const heightOffset = this.object.height/2;
    const widthOffset = this.object.width/2;
    const leftSide = (objectToCheck.x - (objectToCheck.width/2 + widthOffset));
    const rigtSide = (objectToCheck.x + (objectToCheck.width/2 + widthOffset));
    const upSide = (objectToCheck.y + (objectToCheck.height/2 + heightOffset));
    const downSide = (objectToCheck.y - (objectToCheck.height/2 + heightOffset));

    if(this.object.x > leftSide && this.object.x < rigtSide && this.object.y < upSide && this.object.y > downSide)
    {
      this.object.x = prevPos.dx;
      this.object.y = prevPos.dy;
    }
  }
}
