window_width = $(window).width();

if (window_width >= 992) {
    big_image = $('.wrapper > .header');

    $(window).on('scroll', materialKitDemo.checkScrollForParallax);
}

function navbar() {
    if($('body').hasClass('navbar-color-on-scroll')) {
        $('.navbar').addClass('navbar-transparent');
        $(window).on('scroll', materialKit.checkScrollForTransparentNavbar);
    } else {
        $('.navbar').removeClass('navbar-transparent');
    }
}

/*$(document).ready(function() {
    navbar();
});

$(document).addEventListener('turbolinks:load', function() {
    navbar();
});*/


