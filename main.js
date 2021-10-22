setInterval(clock, 1000);

function clock() {
  // set hours mintes seconds
  const date = new Date();
  let seconds = date.getSeconds() / 60;
  let minutes = (seconds + date.getMinutes()) / 60;
  let hours = (minutes + date.getHours()) / 12;
  // digital clock
  let digitalHours = date.getHours();
  if (digitalHours > 12) {
    digitalHours = digitalHours - 12;
  }
  let digitalMin = date.getMinutes();
  
  if (digitalHours < 10) {
    digitalHours = `0${digitalHours}`;
  }
  if (digitalMin < 10) {
    digitalMin = `0${digitalMin}`;
  }
  let digital = `${digitalHours}:${digitalMin}`;
  time.innerHTML = digital
  // play on elements
  play(hour, hours);
  play(min, minutes);
  play(sec, seconds);
  // tick sound
  tick.play();
}

function play(ele, rotate) {
  ele.style.setProperty("--rotate", rotate * 360);
}

clock();