$(function() {
  var bg = chrome.extension.getBackgroundPage();
  console.log($('#volume'))
  $('#volume').slider({
    min : 0,
    max : 100,
    value : bg.volume,
    step : 1,
    range : 'min',
    change : function() {
      var value = $('#volume').slider('value');
      chrome.storage.local.set({
        "chrome_chronopher_volume": value
      }, function(){});
      
      bg.volume = value;
      bg.playTestSound();
    }
  });
});
