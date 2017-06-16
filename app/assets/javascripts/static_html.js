window_width = $(window).width();

if (window_width >= 992) {
    big_image = $('.wrapper > .header');

    /*$(window).on('scroll', materialKitDemo.checkScrollForParallax);*/
    $(window).on('scroll', function() {
        if($(window).scrollTop() > 50) {
            $('.arrow').fadeOut(500);
            $('.main-raised').css('margin', '-100px 30px 0');
        } else {
            $('.arrow').fadeIn(500);
            $('.main-raised').css('margin', '0px 30px 0');
        }
    });
}

var navbar_change = false;

function navbar() {
    if($('body').hasClass('navbar-color-on-scroll')) {
        navbar_change = true;
        $('.navbar').addClass('navbar-transparent');
        $(document).on('scroll', function() {
            if($(document).scrollTop() > 260 ) {
                $('.navbar').removeClass('navbar-transparent');
            } else {
                $('.navbar').addClass('navbar-transparent');

            }
        });
    } else {
        navbar_change = false;
        $(document).on('scroll', function() {
           if($('.navbar').hasClass('navbar-transparent')) {
               $('.navbar').removeClass('navbar-transparent');
           }
        });
    }
}
var loader = $('#loader');

window.onload = function(){
    loaderCall(loader, 0);
};

$(document).on('turbolinks:request-start', function() {
    loaderCall(loader, 500);
});

$(document).ready(function() {
    loaderHide(loader);
    setTimeout(function() {
        $('#phone-card').css('transform', 'rotateY(0deg)');
    }, 1500);
});

document.addEventListener('turbolinks:load', function(e) {
    $('.dropdown-toggle').each(function() {
        $drop = $(this);
        $drop.dropdown();
    });
    navbar();
});

document.addEventListener('turbolinks:before-render', function(e) {

});


function loaderCall(loader, time) {
    loader.fadeIn(time).attr('data-status', 'display');
}

function loaderHide(loader) {
    setTimeout(function() {
        loader.fadeOut(800).attr('data-status', 'hidden');
    }, 1500);
}

/*
lightbox.option({
    fitImagesInViewport: true,
    disableScrolling: true,
    positionFromTop: 50
});
*/

$('a.inactive').click(function(e) {
    e.preventDefault();
});


