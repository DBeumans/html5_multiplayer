class AudioClip
{
  constructor(path, loop, id)
  {
    this.looping = loop || false;
    this.id = id || "clip";
    this.isplaying = false;
    this.audio = document.createElement('audio');
    this.audio.setAttribute('src', path);
    this.audio.setAttribute('id','source1');
    document.body.appendChild(this.audio);

    if(this.looping)
      this.audio.setAttribute('loop', 'loop');
  }

  get length(){return this.duration};
  get ID(){return this.id};
  get isPlaying(){return this.isplaying};
  play()
  {
    this.audio.addEventListener("loadeddata", ()=>
    {
      this.audio.play();
      this.isplaying = true;
      if(!this.looping)
        setTimeout(()=>this.isplaying = false, this.audio.duration * 1000);
    });
  }
  stop(){this.audio.stop(); this.isplaying = false;}
}