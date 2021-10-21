setInterval(clock, 1000);

function clock() {
  // set hours mintes seconds
  const date = new Date();
  let seconds = date.getSeconds() / 60;
  let minutes = (seconds + date.getMinutes()) / 60;
  let hours = (minutes + date.getHours()) / 12;
  // play on elements
  play(hour, hours);
  play(min, minutes);
  play(sec, seconds);
}

function play(ele, rotate) {
  ele.style.setProperty("--rotate", rotate * 360);
}

clock();