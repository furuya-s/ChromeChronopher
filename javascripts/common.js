function playSound() {
  
  var audio = document.createElement('audio');
  document.body.appendChild(audio);
  audio.autoplay = true;

  var src = '../sounds/' + '1' + '.mp3';
  audio.src = src;
}
