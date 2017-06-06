window_width = $(window).width();

if (window_width >= 992) {
    big_image = $('.wrapper > .header');

    $(window).on('scroll', materialKitDemo.checkScrollForParallax);
}

$('[data-toggle="popover"]').popover();

function navbar() {
    if($('body').hasClass('navbar-color-on-scroll')) {
        $('.navbar').removeClass('navbar-primary').addClass('navbar-transparent');
        $(window).on('scroll', materialKit.checkScrollForTransparentNavbar);
    } else {
        $('.navbar').removeClass('navbar-transparent').addClass('navbar-primary');
    }
}
var loader = $('#loader');

$(document).ready(function() {
    loaderHide(loader);
});

document.addEventListener('turbolinks:request-start', function() {
    loaderCall(loader);
});

document.addEventListener('turbolinks:load', function() {
    loaderHide(loader);
    navbar();
});


function loaderCall(loader) {
    loader.fadeIn(500).attr('data-status', 'display');
}

function loaderHide(loader) {
    setTimeout(function() {
        loader.fadeOut(800).attr('data-status', 'hidden');
    }, 800);
}

lightbox.option({
    fitImagesInViewport: true,
    disableScrolling: true,
    positionFromTop: 50
});

$('a.inactive').click(function(e) {
    e.preventDefault();
});


