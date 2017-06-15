class Startscreen
{
  constructor(title)
  {
    const startEvent = new Event('startGame');
    this.startWindow = document.createElement('div');
    this.startWindow.setAttribute('id', 'window');

    const head = document.createElement('h1');
    head.setAttribute('class','head');
    head.innerHTML = title;
    head.style.textAlign = "center";

    const nameLabel = document.createElement('h3');
    nameLabel.setAttribute('class', 'label');
    nameLabel.innerHTML = "Nickname:";

    this.nameField = document.createElement('input');
    this.nameField.setAttribute('type', 'text');
    this.nameField.setAttribute('maxlength', '32');
    this.nameField.setAttribute('class', 'inputField');
    this.nameField.setAttribute('autofocus', 'autofocus');

    const startButton = document.createElement('input');
    startButton.setAttribute('type', 'button');
    startButton.setAttribute('value', 'Start Game!');
    startButton.setAttribute('id', 'startButton');

    const creators = document.createElement('div');
    creators.setAttribute('id', 'creators');
    creators.innerHTML = '<h1>Created by:</h1>';
    creators.innerHTML += '<a href="http://madbytestudio.com/" target="_blank">Danilo Beumans</a>';
    creators.innerHTML += '<br />';
    creators.innerHTML += '<a href="http://www.freetimedev.com" target="_blank">Dani van der Werf</a>';

    this.startWindow.appendChild(head);
    this.startWindow.appendChild(nameLabel);
    this.startWindow.appendChild(this.nameField);
    this.startWindow.appendChild(startButton);
    this.startWindow.appendChild(creators);
    document.body.appendChild(this.startWindow);

    startButton.addEventListener('click', () => window.dispatchEvent(startEvent));
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
  destroy(){document.body.removeChild(this.startWindow);}
};
