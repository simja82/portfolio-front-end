var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(window).ready(function() {
  $(".text_animate").addClass('animated zoomIn');
  $(".text_animate").removeClass('passive');

  $('.text_animate').one(animationEnd, function() {
    $(".name").removeClass("passive");
    $(".name").addClass("animated fadeInDown");
    $(".text_animate").removeClass('animated zoomIn');

    $('.name').one(animationEnd, function() {
      $(".btn-outline").removeClass("passive");
    });
  });
});

var Name;
$('.btn-outline').click(function() {
  Name = $('.name').val();
  console.log(Name);

  if ($('.name').val() == '') {
    $(".name").addClass("animated pulse");
    $('.name').one(animationEnd, function() {
      $(".name").removeClass("animated pulse");
    });
  } else {
    $(".text_animate").addClass('passive');
    setTimeout(function() {
      $(".preloader").css({
        visibility: 'visible',
        opacity: 1,
      })
    }, 3000);
    setTimeout(function() {
      $(".progress").css({
        width: 100 + "%",
      });
    }, 1000);
    setTimeout(function() {
      $('#loader').addClass("animated slideOutUp");
    }, 3000);
    setTimeout(function() {
      var i = 0;
      var a = setInterval(function() {
        i++;
        $(".text").html(i);
      }, 20);
      if (i >= 100) {
        clearInterval(a);
      }

    }, 1000);

    $(".user").html(Name);
  }
})