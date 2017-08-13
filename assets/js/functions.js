$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


var pContainerHeight = $('.header').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

if(wScroll > $('.container').offset().top - $(window).height()){

  var offset = (Math.min(0, wScroll - $('.container').offset().top +$(window).height() - 350)).toFixed();

  $('.column1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.5) +'px)'});

  $('.column3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.5) +'px)'});

}
});

var header = $('.header');
var range = 150;

$(window).on('scroll', function () {
  
    var scrollTop = $(this).scrollTop();
    var offset = header.offset().top;
    var height = header.outerHeight();
    offset = offset + height / 2;
    var calc = 1 - (scrollTop - offset + range) / range;
  
    header.css({ 'opacity': calc });
  
    if ( calc > '1' ) {
      header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }
  
});