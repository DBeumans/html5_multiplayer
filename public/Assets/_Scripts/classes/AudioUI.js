class AudioUI
{
  constructor()
  {
    const backgroundLabel = document.createElement('h2');
    backgroundLabel.innerHTML = "Background volume:";
    document.body.appendChild(backgroundLabel);

    const backgroundSlider = document.createElement('input');
    backgroundSlider.setAttribute('type', 'range');
    backgroundSlider.value = 0.1;
    document.body.appendChild(backgroundSlider);

    backgroundSlider.addEventListener('change', ()=>
    {
      const event = new CustomEvent('updateVolume', {detail:{value:backgroundSlider.value, name:"background"}});
      window.dispatchEvent(event);
    });
  }
};
