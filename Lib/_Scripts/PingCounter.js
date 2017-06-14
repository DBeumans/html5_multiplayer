class PingCounter
{
  constructor()
  {
    this.lastCalledTime = null;
    this.ping = 0;
    this.counter = document.createElement('div');
    this.counter.setAttribute('id', 'fps');
    this.counter.innerHTML = 'Waiting for connection';
    document.body.appendChild(this.counter);
  }

  showfps()
  {
    if(!this.lastCalledTime)
    {
      this.lastCalledTime = Date.now();
      this.ping = 0;
      return;
    }
    let delta = (Date.now() - this.lastCalledTime)/1000;
    this.lastCalledTime = Date.now();
    this.ping = 1/delta;
    this.counter.innerHTML = "ping: " + Math.floor(this.ping);
  }
}
