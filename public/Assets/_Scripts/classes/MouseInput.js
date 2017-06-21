class MouseInput {
  constructor(element)
  {
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseClicked = false;
    this.mouseDown = false;

    this.element = element || window; // reference to the canvas for the mouse track.

    this.element.addEventListener("mousemove", this.OnMouseMove.bind(this));
    this.element.addEventListener("click", this.OnMouseClick.bind(this));
    this.element.addEventListener("mouseout", this.OnMouseOut.bind(this));
    this.element.addEventListener("mouseup", this.OnMouseUp.bind(this));
    this.element.addEventListener("mousedown", this.OnMouseDown.bind(this));

  }

  OnMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

  }

  OnMouseDown(e)
  {
    this.mouseDown = true;
  }

  OnMouseClick(e)
  {
    this.mouseClicked = true;
  }

  OnMouseUp(e)
  {
    this.mouseClicked = false;
    this.mouseDown = false;
  }

  OnMouseOut(e)
  {

  }

}
