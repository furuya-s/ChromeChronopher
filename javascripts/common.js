function playSound(hour) {

  var audio = document.createElement('audio');
  document.body.appendChild(audio);
  audio.autoplay = true;

  var src = '../sounds/' + hour + '.mp3';
  audio.src = src;
}
