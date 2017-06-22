class AudioManager
{
  constructor()
  {
    this.clips = [];
    window.addEventListener('updateVolume', (e)=>{this.updateVolume(e)});
  }

  addClip(path, loop, id)
  {
    this.clips.push(new AudioClip(path, loop, id));
    return this.clips.length-1;
  }
  playClip(index){this.clips[index].play()}
  stopClip(index){this.clips[index].stop()};
  isPlaying(index){return this.clips[index].isPlaying};

  updateVolume(e)
  {
    const newValue = e.detail.value/100;
    const audioName = e.detail.name;

    for (let i = 0; i < this.clips.length; i++)
    {
      if(this.clips[i].id == audioName)
      {
        this.clips[i].adjustVolume(newValue);
        //console.log(this.clips);
      }
    }
  }
}
