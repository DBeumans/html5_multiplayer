class InputManager
{
  constructor()
  {
    this.keys = {};
    window.addEventListener("keydown",  this.OnKeyDown.bind(this));
    window.addEventListener("keyup", this.OnKeyUp.bind(this));
  }

  OnKeyDown(e)
  {
    this.keys[e.keyCode] = true;
    if(this.keys[32] || this.keys[37] || this.keys[38] || this.keys[39] || this.keys[40])
       e.preventDefault();
  }

  OnKeyUp(e) {this.keys[e.keyCode] = false;}
}
