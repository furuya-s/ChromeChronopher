var volume = 50;

function playSound(hour) {

  var audio = document.createElement('audio');
  audio.volume = volume / 100;
  document.body.appendChild(audio);
  audio.autoplay = true;

  audio.src = '../sounds/' + hour + '.mp3';
}
