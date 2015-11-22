// NAVBAR LINKS SHAKE
$(".uk-navbar-nav li a").click(function() {
	$(this).addClass('animated tada');
});
// NAVBAR HEADING EFFECTS
$(".uk-navbar-content a").addClass("animated flipInX");
$(".uk-navbar-content a").removeClass("animated flipInX");
$(".uk-navbar-content a").hover(function() {
	$(this).addClass("animated rubberBand");
});

// HOME PAGE ANIMATION LETTERING
$("#letter-container h2 a").lettering();

// HEADING ANIMATION
$(".heading").addClass("animated fadeInDownBig");


