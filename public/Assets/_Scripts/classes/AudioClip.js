class AudioClip
{
  constructor(path, loop, id)
  {
    this.looping = loop || false;
    this.id = id || "FX";
    this.volume = 0.1;
    this.isplaying = false;
    this.audio = document.createElement('audio');
    this.audio.setAttribute('src', path);
    this.audio.setAttribute('id','source1');
    document.body.appendChild(this.audio);

    if(this.looping)
      this.audio.setAttribute('loop', 'loop');
    this.audio.addEventListener("loadeddata", ()=>
    {
      this.duration = this.audio.duration;
    });
    this.audio.volume = this.volume;
  }

  get length(){return this.duration};
  get ID(){return this.id};
  get isPlaying(){return this.isplaying};
  play()
  {
    this.audio.play();
    this.isplaying = true;
    if(!this.looping)
      setTimeout(()=>this.isplaying = false, this.duration * 1000);
  }
  stop(){this.audio.pause(); this.isplaying = false; this.audio.currentTime = 0;}
  pause(){this.audio.pause(); this.isplaying = true;}
  adjustVolume(value){this.volume = value; this.audio.volume = this.volume;}
  mute(value)
  {
    if(value)this.audio.volume = 0;
    else this.audio.volume = this.volume;
  }
}
