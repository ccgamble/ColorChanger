$('#reset').on('click', function() {
  $('body').css('background-color', '#FFF')
});

$('#random').on('click', function() {
  $('body').css('background-color', randomColor());

});

function randomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 255)) + ')';
}
