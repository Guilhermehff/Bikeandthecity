$(document).ready(function() {

  $anchor = window.location.hash;
  console.log($anchor);

  if ($anchor == "#closeVideo") {
    $('.video').get(0).pause()
  };

});
