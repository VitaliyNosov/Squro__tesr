document.addEventListener("DOMContentLoaded", function() {

// menu mobile 

$('.menu__icon').click(function () {
    $('.menu__content').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('.menu__content').removeAttr('style');
    }
});

// podmenu

$('.menu__dpopdown').click(function () {
    $('.body__podmenu').slideToggle(500);
});
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('.body__podmenu').removeAttr('style');
    }
});

// slick slider 

$('.slider').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
});


});
