class Debug
{
  constructor()
  {

  }

  visualizePosition(x, y, ctx)
  {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x, y, 5, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
