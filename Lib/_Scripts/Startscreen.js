class Startscreen
{
  constructor(title)
  {
    this.startWindow = document.createElement('div');
    this.startWindow.setAttribute('id', 'window');

    const head = document.createElement('h2');
    head.innerHTML = title;
    head.style.textAlign = "center";

    this.nameField = document.createElement('input');
    this.nameField.setAttribute('type', 'text');
    this.nameField.setAttribute('maxlength', '32');
    this.nameField.setAttribute('id', 'nameField');

    this.startButton = document.createElement('input');
    this.startButton.setAttribute('type', 'button');
    this.startButton.setAttribute('value', 'Start Game!');
    this.startButton.setAttribute('id', 'startButton');

    const creators = document.createElement('div');
    creators.setAttribute('id', 'creators');
    creators.innerHTML = '<h1>Created by:</h1>';
    creators.innerHTML += '<a href="http://madbytestudio.com/" target="_blank">Danilo Beumans</a>';
    creators.innerHTML += '<br />';
    creators.innerHTML += '<a href="http://www.freetimedev.com" target="_blank">Dani van der Werf</a>';
    //const linebreak = document.createElement('br');

    this.startWindow.appendChild(head);
    this.startWindow.appendChild(this.nameField);
    this.startWindow.appendChild(this.startButton);
    this.startWindow.appendChild(creators);
    document.body.appendChild(this.startWindow);
  }
};
