$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    
    $('.slide1').css({
        'transform' : 'translateY('+ -wScroll /2.5 +'px)'
    })
    $('.slide2').css({
        'transform' : 'translateY('+ -wScroll /-1.7 +'px)'
    })
    $('.slide3').css({
        'transform' : 'translateY('+ -wScroll /-1.7 +'px)'
    })
    $('.content-down-arrow').css({
        'transform' : 'translateY('+ wScroll /4 +'px)'
    })
    $('.carousel-caption').css({
        'transform' : 'translateY('+ wScroll /2 +'px)'
    })
    $('.carousel-control').css({
        'transform' : 'translateY('+ wScroll /2 +'px)'
    })
});

var divs = $('.carousel-caption, .carousel-control');
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   divs.css({ 'opacity' : (1 - st/600) });
});