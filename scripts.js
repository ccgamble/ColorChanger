var randomBtn = $('#random');
var resetBtn = $('#reset');

resetBtn.on('click', function() {
  $('body').css('background-color', '#FFF')
});

randomBtn.on('click', function() {

  $('body').css('background-color', randomColor())
});
