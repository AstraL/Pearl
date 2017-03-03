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


