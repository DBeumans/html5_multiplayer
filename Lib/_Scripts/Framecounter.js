class Framecounter
{
  constructor()
  {
    this.lastCalledTime = null;
    this.fps = 0;
    this.counter = document.createElement('div');
    this.counter.setAttribute('id', 'fps');
    this.counter.innerHTML = 'Waiting for frames';
    document.body.appendChild(this.counter);
  }

  showfps()
  {
    if(!this.lastCalledTime)
    {
      this.lastCalledTime = Date.now();
      this.fps = 0;
      return;
    }
    let delta = (Date.now() - this.lastCalledTime)/1000;
    this.lastCalledTime = Date.now();
    this.fps = 1/delta;
    this.counter.innerHTML = Math.floor(this.fps)+"fps";
  }
}
