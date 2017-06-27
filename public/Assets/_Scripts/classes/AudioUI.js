class AudioUI
{
  constructor()
  {
    const container = document.createElement('div');
    container.setAttribute('id', 'audio-options');
    document.body.appendChild(container);

    const backgroundLabel = document.createElement('h2');
    backgroundLabel.setAttribute('class', 'label');
    backgroundLabel.innerHTML = "Background volume:";
    container.appendChild(backgroundLabel);

    const backgroundSlider = document.createElement('input');
    backgroundSlider.setAttribute('type', 'range');
    backgroundSlider.setAttribute('class', 'slider');
    backgroundSlider.value = 0.1;
    container.appendChild(backgroundSlider);

    backgroundSlider.addEventListener('change', ()=>
    {
      const event = new CustomEvent('updateVolume', {detail:{value:backgroundSlider.value, name:"background"}});
      window.dispatchEvent(event);
    });

    const fxLabel = document.createElement('h2');
    fxLabel.setAttribute('class', 'label');
    fxLabel.innerHTML = "FX volume:";
    container.appendChild(fxLabel);

    const fxSlider = document.createElement('input');
    fxSlider.setAttribute('type', 'range');
    fxSlider.setAttribute('class', 'slider');
    fxSlider.value = 0.1;
    container.appendChild(fxSlider);

    fxSlider.addEventListener('change', ()=>
    {
      const event = new CustomEvent('updateVolume', {detail:{value:fxSlider.value, name:"fx"}});
      window.dispatchEvent(event);
    });

    const muteLabel = document.createElement('h2');
    muteLabel.setAttribute('class', 'label');
    muteLabel.innerHTML = "Mute: ";
    container.appendChild(muteLabel);

    const muteButton = document.createElement('input');
    muteButton.setAttribute('type', 'checkbox');
    muteButton.value = false;
    container.appendChild(muteButton);
    muteButton.addEventListener('change', ()=>
    {
      const event = new CustomEvent('mute', {detail:{value:muteButton.checked}});
      window.dispatchEvent(event);
    });
  }
};
