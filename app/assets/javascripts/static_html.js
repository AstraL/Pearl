window_width = $(window).width();

if (window_width >= 992) {
    big_image = $('.wrapper > .header');

    $(window).on('scroll', materialKitDemo.checkScrollForParallax);
}

$('[data-toggle="popover"]').popover();

function navbar() {
    if($('body').hasClass('navbar-color-on-scroll')) {
        $('.navbar').addClass('navbar-transparent');
        $(window).on('scroll', materialKit.checkScrollForTransparentNavbar);
    } else {
        $('.navbar').removeClass('navbar-transparent');
    }
}

// Map instead of port foto
var image = $('#port-photo').html();
$('#map-trigger').on('click', function() {
    var container = $('#map-port');
    var height = container.height();
    if(container.attr('data-content') === "image") {
        container.css('height', height).attr('data-content', 'map');
        mapPort();
    } else {
        container.html('');
        container.html(image).attr('data-content', 'image');
    }
});
var loader = $('#loader');

$(document).ready(function() {
    loaderHide(loader);
});

document.addEventListener('turbolinks:request-start', function() {
    loaderCall(loader);
});

document.addEventListener('turbolinks:load', function() {
    loaderHide(loader);
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


