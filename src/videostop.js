$(document).ready(function() {

  $(".video").prop("volume", 0.5);

  $('.openModal').click(function(event) {
    $('.video').get(0).play();
  });

  $('.closeModal').click(function(event) {
    $('.video').get(0).pause();
  });

});
