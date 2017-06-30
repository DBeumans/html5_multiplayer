class AudioUI
{
  constructor()
  {
    const container = document.createElement('div');
    container.setAttribute('id', 'audio-options');
    document.body.appendChild(container);

    const bgControls = document.createElement('div');
    bgControls.setAttribute('class', 'control-container');
    const backgroundLabel = document.createElement('h2');
    backgroundLabel.setAttribute('class', 'label');
    backgroundLabel.innerHTML = "Background volume:";
    bgControls.appendChild(backgroundLabel);

    const backgroundSlider = document.createElement('input');
    backgroundSlider.setAttribute('type', 'range');
    backgroundSlider.setAttribute('class', 'slider');
    backgroundSlider.value = 0.1;
    bgControls.appendChild(backgroundSlider);
    backgroundSlider.addEventListener('change', ()=>
    {
      const event = new CustomEvent('updateVolume', {detail:{value:backgroundSlider.value, name:"background"}});
      window.dispatchEvent(event);
    });
    container.appendChild(bgControls);

    const fxControls = document.createElement('div');
    fxControls.setAttribute('class', 'control-container');
    const fxLabel = document.createElement('h2');
    fxLabel.setAttribute('class', 'label');
    fxLabel.innerHTML = "FX volume:";
    fxControls.appendChild(fxLabel);

    const fxSlider = document.createElement('input');
    fxSlider.setAttribute('type', 'range');
    fxSlider.setAttribute('class', 'slider');
    fxSlider.value = 0.1;
    fxControls.appendChild(fxSlider);

    fxSlider.addEventListener('change', ()=>
    {
      const event = new CustomEvent('updateVolume', {detail:{value:fxSlider.value, name:"fx"}});
      window.dispatchEvent(event);
    });
    container.appendChild(fxControls);

    const muteControls = document.createElement('div');
    muteControls.setAttribute('class', 'control-container');
    const muteLabel = document.createElement('h2');
    muteLabel.setAttribute('class', 'label');
    muteLabel.innerHTML = "Mute: ";
    muteControls.appendChild(muteLabel);

    const muteToggle = document.createElement('label');
    muteToggle.setAttribute('for', 'mute-button');
    muteControls.appendChild(muteToggle);

    const muteIcon = document.createElement('i');
    muteIcon.setAttribute('class', 'fa fa-volume-up');
    muteIcon.setAttribute('id', 'mute-toggle');
    muteIcon.setAttribute('aria-hidden', 'true');
    muteToggle.appendChild(muteIcon);

    const muteButton = document.createElement('input');
    muteButton.setAttribute('type', 'checkbox');
    muteButton.setAttribute('id', 'mute-button');
    muteButton.style.display = "none";
    muteButton.value = false;
    muteControls.appendChild(muteButton);
    muteButton.addEventListener('change', ()=>
    {
      const event = new CustomEvent('mute', {detail:{value:muteButton.checked}});
      window.dispatchEvent(event);
      if(!muteButton.checked)
        muteIcon.style.color = "white";
      else
        muteIcon.style.color = "gray";
    });
    container.appendChild(muteControls);
  }
};
