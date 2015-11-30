window.onload = loop;

function loop() {
  console.log("hoge");
  playSound();
  setTimeout(loop, 1000)
}
