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
    this.keyCodesCheck(e);
  }

  OnKeyDown(e) {
    this. keyCodesCheck(e);

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

  keyCodesCheck(e) {
    let char = this.toString(e.which || e.keyCode);
    for (var i = 0; i < this.keys.length; i++) {
      if(this.keys[i] == char)
        return;
    }
    this.keys.push(char,false);
  }

  /**
  Convert keyCode to string.
  **/
  toString(key) {
    if(key == 32) key = "space";
    else if(key == 8) key = "backspace";
    else if(key == 9) key = "tab";
    else if(key == 13) key = "enter";
    else if(key == 16) key = "shift";
    else if(key == 17) key = "ctrl";
    else if(key == 18) key = "alt";
    else if(key == 20) key = "caps_lock";
    else if(key == 27) key = "escape";
    else if(key == 37) key = "left_arrow";
    else if(key == 38) key = "up_arrow";
    else if(key == 39) key = "right_arrow";
    else if(key == 40) key = "down_arrow";


    else key = String.fromCharCode(key);

    /**
    If space is pressed change " " to "space".
    **/

    //console.log("Key: " + key);
    return key;
  }
}
