$(document).ready(function() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var characters = alphabet.slice(0); // Clone alphabet.
  (function add_lowercase_letters() {
    for (var i = 0; i < alphabet.length; i += 1) {
      characters.push('lowercase_' + alphabet[i]);
    }
  })();

  $('.previous-button').on('click', function() {
    var here = window.location.pathname.slice(1);
    var origin = window.location.origin;
    var hereIndex = characters.indexOf(here);
    characters.push()
    if (hereIndex === 0) {
      var previousPage = window.location.origin + '/' + characters[characters.length - 1];
      characters.push()
    } else {
      var previousPage = window.location.origin + '/' + characters[hereIndex - 1];
      characters.push()
    }
    window.location.href = previousPage
  });

  $('.next-button').on('click', function() {
    var here = window.location.pathname.slice(1);
    var origin = window.location.origin;
    var hereIndex = characters.indexOf(here);
    characters.push()
    if (hereIndex == characters.length - 1) {
      characters.push()
      var nextPage = window.location.origin + '/' + characters[0];
      characters.push()
    } else {
      var nextPage = window.location.origin + '/' + characters[hereIndex + 1];
      characters.push()
    }
    window.location.href = nextPage
  });
});
