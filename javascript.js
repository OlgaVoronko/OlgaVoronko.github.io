/*****************************************   SMOOTH SCROLLING    *******************************************/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});



/*****************************************   UP ARROW APPEAR    *******************************************/
$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 250) {
        $('.up-arrow').addClass('arrow-appear');
    } else {
        $('.up-arrow').removeClass('arrow-appear');
    }
});


/********************************************   HANDLE FORM MESSAGE    *************************************/

$('.msg-form').submit(function() {
  event.preventDefault();
  $.ajax({
    type: "POST",
    url: "http://localhost/portfolio/msg_process.php",
    data: $(this).serialize()
    }).done(function (data) {
        $('.msg-container').animate({visibility:'hidden'},500);
        $('.msg-container').animate({display: 'none'}, { queue: false, duration: 4000 });
        setTimeout(function() {
          $('.msg-container').animate({visibility:'visible'},500);
        },1500);
    })
});
  