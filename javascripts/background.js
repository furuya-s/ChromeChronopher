window.onload = loop;

function loop() {
  var date = new Date();

  if (date.getMinutes() == 0 && date.getSeconds() == 0) {
    playSound(date.getHours());
  }

  setTimeout(loop, 1000)
}
