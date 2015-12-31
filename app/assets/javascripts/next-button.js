$(document).ready(function() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  $('.next-button').on('click', function() {
    var here = window.location.pathname[1];
    var origin = window.location.origin;
    var hereIndex = alphabet.indexOf(here);
    if (hereIndex == alphabet.length - 1) {
      var nextPage = window.location.origin + '/' + alphabet[0];
    } else {
      var nextPage = window.location.origin + '/' + alphabet[hereIndex + 1];
    }
    window.location.href = nextPage
  });
});
