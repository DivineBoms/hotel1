$(document).ready(function(){
    $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
    });
    $('nav ul li a').click(function(){
     $('.fa-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        if($(window).scrollTop() > 10){
          $('#header').addClass('header-active');
        }else{
          $('#header').removeClass('header-active');
        }
    });
  });

  var $owl = $('#carousel1');
$owl.children().each(function( index ){
  $(this).attr('data-position', index)
});
$('#carousel1').owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  margin: 45,
  dots: true,
  loop: true,
  center: true,
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
});

$(document).on('click', '.owl-item>div', function(){
  var $speed = 1000;
  $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
});