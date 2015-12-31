$(document).ready(function() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  $('.previous-button').on('click', function() {
    var here = window.location.pathname[1];
    var origin = window.location.origin;
    var hereIndex = alphabet.indexOf(here);
    if (hereIndex == alphabet.length - 1) {
      var previousPage = window.location.origin + '/' + alphabet[0];
    } else {
      var previousPage = window.location.origin + '/' + alphabet[hereIndex - 1];
    }
    window.location.href = previousPage
  });

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
