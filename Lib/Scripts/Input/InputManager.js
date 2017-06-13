class InputManager {

  constructor() {
    this.keys = []; // create a empty array to store keys

    window.addEventListener("keydown", this.OnKeyDown.bind(this));
    window.addEventListener("keyup", this.OnKeyUp.bind(this));
    window.addEventListener("keypress", this.OnKeyPress.bind(this));
  }

  /**
  Register key press and convert them into a string.
  First Checks if it exists in the keys array, if it doens't exists add it.
  **/
  OnKeyPress(e) {
    let char = this.toString(e.which || e.keyCode);
    for (var i = 0; i < this.keys.length; i++) {
      if(this.keys[i] == char)
        return;
    }
    this.keys.push(char,false);
  }

  OnKeyDown(e) {
    for (var i = 0; i < this.keys.length; i++) {
      if(this.keys[i] == false)
      {
        this.keys[i] = true;
      }
    }
  }

  OnKeyUp(e) {
    for (var i = 0; i < this.keys.length; i++) {
      if(this.keys[i] == true)
        this.keys[i] = false;
    }
      this.keys.splice(0,e.keyCode);
  }

  /**
  Use this function to check if a key is down.
  **/
  isKeyDown(key) {
    for (var i = 0; i < this.keys.length; i++) {
      if(this.keys[i] == key)
      {
        if(this.keys[i+1] == true) {
          return true;
        }
      }
    }
  }

  /**
  Convert keyeCode to string.
  **/
  toString(key) {
    key = String.fromCharCode(key);

    /**
    If space is pressed change " " to "space".
    **/
    if(key == " ") // edit later.
    {
      key = "space";
    }

    console.log(key);
    return key;
  }
}
