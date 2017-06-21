class Startscreen
{
  constructor(title, _input)
  {
    this.startEvent = new Event('startGame');
    const input = _input || new InputManager();

    /*WINDOW*/
    this.startWindow = document.createElement('div');
    this.startWindow.setAttribute('id', 'window');

    /*TITLE*/
    const head = document.createElement('h1');
    head.setAttribute('class','head');
    head.innerHTML = title;
    head.style.textAlign = "center";

    /*NICKNAME*/
    const name_group = document.createElement('div');
    name_group.setAttribute('class', 'input-group');

    const nameIconBg = document.createElement('span');
    nameIconBg.setAttribute('class', 'icon-background');
    name_group.appendChild(nameIconBg);

    const nameIcon = document.createElement('i');
    nameIcon.setAttribute('class', 'fa fa-user');
    nameIcon.setAttribute('aria-hidden', 'true');
    nameIconBg.appendChild(nameIcon);

    this.nameField = document.createElement('input');
    this.nameField.setAttribute('class', 'input-field');
    this.nameField.setAttribute('type', 'text');
    this.nameField.setAttribute('autofocus', 'autofocus');
    this.nameField.setAttribute('placeholder', 'Nickname');
    name_group.appendChild(this.nameField);

    /*PASSWORD*/
    const pass_group = document.createElement('div');
    pass_group.setAttribute('class', 'input-group');

    const passIconBg = document.createElement('span');
    passIconBg.setAttribute('class', 'icon-background');
    pass_group.appendChild(passIconBg);

    const passIcon = document.createElement('i');
    passIcon.setAttribute('class', 'fa fa-key');
    passIcon.setAttribute('aria-hidden', 'true');
    passIconBg.appendChild(passIcon);

    this.passField = document.createElement('input');
    this.passField.setAttribute('placeholder', 'Room password');
    this.passField.setAttribute('class', 'input-field');
    this.passField.setAttribute('type', 'password');
    this.passField.setAttribute('maxlength', '32');
    pass_group.appendChild(this.passField);

    /*STARTBUTTON*/
    const button_group = document.createElement('div');
    button_group.setAttribute('class', 'input-group button-hover');
    button_group.style.display = "none";

    const button_icon_bg = document.createElement('span');
    button_icon_bg.setAttribute('class', 'icon-background');
    button_group.appendChild(button_icon_bg);

    const button_icon = document.createElement('i');
    button_icon.setAttribute('class', 'fa fa-gamepad');
    button_icon.setAttribute('aria-hidden', 'true');
    button_icon_bg.appendChild(button_icon);

    let startButton = document.createElement('button');
    startButton.setAttribute('id', 'startButton');
    startButton.setAttribute('type', 'button');
    startButton.innerHTML = 'PLAY!';

    startButton.addEventListener('mouseover', ()=>
    {
      startButton.style.display = "none";
      button_group.style.display = "table";
    });

    button_group.addEventListener('mouseout', ()=>
    {
      startButton.style.display = "block";
      button_group.style.display = "none";
    });

    /*CREATORS*/
    const creators = document.createElement('div');
    creators.setAttribute('id', 'creators');
    creators.innerHTML = '<h1>Created by:</h1>';
    creators.innerHTML += '<a href="http://madbytestudio.com/" target="_blank">Danilo Beumans</a>';
    creators.innerHTML += '<br />';
    creators.innerHTML += '<a href="http://www.freetimedev.com" target="_blank">Dani van der Werf</a>';

    /*PUT WINDOW TOGETHER*/
    this.startWindow.appendChild(head);
    this.startWindow.appendChild(name_group);
    this.startWindow.appendChild(pass_group);
    this.startWindow.appendChild(startButton);
    this.startWindow.appendChild(button_group);
    this.startWindow.appendChild(creators);
    document.body.appendChild(this.startWindow);

    button_group.addEventListener('click', () => {this.startGame()});
    this.loop = setInterval(()=>{this.update(input)}, 20)
  }

  update(input)
  {
    if(input.keys[13])
    {
      this.startGame();
      clearInterval(this.loop);
    }
  }

  startGame()
  {
    if(this.password != "mustard")
      return;
    window.dispatchEvent(this.startEvent);
  }

  loadingScreen()
  {
    const childs = this.startWindow.childNodes;
    while (this.startWindow.firstChild) this.startWindow.removeChild(this.startWindow.firstChild);
    const loadingText = document.createElement('h3');
    loadingText.setAttribute('class', 'head');
    loadingText.innerHTML = 'Loading...';

    this.startWindow.appendChild(loadingText);
  }

  get name(){return this.nameField.value};
  get password(){return this.passField.value};
  destroy(){document.body.removeChild(this.startWindow);}
};
