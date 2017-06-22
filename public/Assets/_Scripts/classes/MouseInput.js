class MouseInput {
  constructor(element)
  {
    this.mouseX = 0;
    this.mouseY = 0;

    this.element = element || window; // reference to the canvas for the mouse track.

    this.element.addEventListener("mousemove", this.OnMouseMove.bind(this));
    this.element.addEventListener("click", this.OnMouseClick.bind(this));
    this.element.addEventListener("mouseout", this.OnMouseOut);
  }

  OnMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

  }

  OnMouseClick(e)
  {

  }

  onMouseOut(e) {
    	console.log("out");
  }

}
