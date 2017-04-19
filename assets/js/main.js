$(window).on('load', function() {
    $('header').height($(window).height());
    console.log( $(window).height()-540);
    $('.intro-text').css('top', $(window).height()-540);
});
$(document).ready(function(){
    var offset_stuck = 100;
    var offset_show_down = 220;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset_stuck) {
            $('#mainNav').removeClass('navbar-static-top');
            $('#mainNav').addClass('navbar-fixed-top');
            $('#mainNav').css('position', 'fixed');
        } else {  
            $('#mainNav').removeClass('navbar-fixed-top');
            $('#mainNav').addClass('navbar-static-top');
            $('#mainNav').css('position', 'absolute');
        }
        /*if ($(this).scrollTop() > offset_show_down) {
            $('#navigation').addClass('navbar-show-down');
        } else {
            $('#navigation').removeClass('navbar-show-down');
        }*/
    }); 
});