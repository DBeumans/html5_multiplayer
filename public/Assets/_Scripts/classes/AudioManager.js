class AudioManager
{
  constructor(id)
  {
    this.id = id || "audiomanager";
    this.clips = []
  }

  addClip(path, loop, id)
  {
    this.clips.push(new AudioClip(path, loop, id));
    return this.clips.length-1;
  }
  playClip(index){this.clips[index].play()}
  stopClip(index){this.clips[index].stop()};
  isPlaying(index){return this.clips[index].isPlaying};
}
