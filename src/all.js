$(document).ready(function() {

  $("ul a").click(function(evn) {
    evn.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 150
    }, 'slow');
  });


  $(".video").prop("volume", 0.5);


  $('.openModal').click(function(event) {
    $('.video').prop('muted', false);
    $('.modalBackground').css('opacity', '1');
    $('.modalBackground').css('pointer-events', 'auto');
  });

  $('.closeModal').click(function(event) {
    $('.video').prop('muted', true);
    $('.modalBackground').css('opacity', '0');
    $('.modalBackground').css('pointer-events', 'none');
  });

});
