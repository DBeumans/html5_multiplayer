class Vector2
{
  constructor(dx,dy)
  {
    this.dx = dx;
    this.dy = dy;
  }

  magnitude(){return Math.sqrt(this.dx * this.dx + this.dy + this.dy);}
  scalarMul(scalar){return new Vector2(scalar*this.dx, scalar*this.dy);}
  add(vector){return new Vector2(this.dx + vector.dx, this.dy + vector.dy);}
  substract(vector){return new Vector2(this.dx - vector.dx, this.dy - vector.dy);}

  normalize()
  {
    var magnitude = this.magnitude();
    this.dx = this.dx/magnitude;
    this.dy = this.dy/magnitude;
  }

  angle(degrees)
  {
    this.radians = Math.atan2(this.dy,this.dx);
    if(degrees)
      return this.radians*(180/Math.PI);
    else
      return this.radians;
  }
}
