$('.house-link').hover(function(){
    var header = $(this).children('.header');
    if($(this).hasClass('disabled')) {

    } else {
        header.toggleClass('header-success');
    }

});

$('.house-link.disabled').click(function(e) {
    e.preventDefault();
});

$('.card-apartaments').click(function(e) {
    var img = $(this).data("img");

    $('#plan-view img').attr('src', img);
});
