$(".btn-reply").click(function(){
    $(".reply-hide").show();
});

$(".reply-image a").fancybox({
    "padding" : 0
});


$(".popup").fancybox({
    "padding" : 0
});



$('.aftermath-inner').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.aftermath-prev').click(function(){
    $('.aftermath-inner').slick('slickPrev');
});

$('.aftermath-next').click(function(){
    $('.aftermath-inner').slick('slickNext');
});


$('.clients-slide').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1
});

$('.clients-prev').click(function(){
    $('.clients-slide').slick('slickPrev');
});

$('.clients-next').click(function(){
    $('.clients-slide').slick('slickNext');
});






// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
$(function() {
    $('.service li').each( function() { $(this).hoverdir(); } );
});

*/


// подсказки для форм (можноу удалить)

$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});