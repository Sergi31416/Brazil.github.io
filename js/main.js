jQuery(document).ready(function($){
	//open menu
	$('.cd-menu-trigger').on('click', function(event){
		event.preventDefault();
		$('#cd-main-content').addClass('move-out');
		$('#main-nav').addClass('is-visible');
		$('.cd-shadow-layer').addClass('is-visible');
	});
	//close menu
	$('.cd-close-menu').on('click', function(event){
		event.preventDefault();
		$('#cd-main-content').removeClass('move-out');
		$('#main-nav').removeClass('is-visible');
		$('.cd-shadow-layer').removeClass('is-visible');
	});

	//clipped image - blur effect
	set_clip_property();
	$(window).on('resize', function(){
		set_clip_property();
	});

	function set_clip_property() {
		var $header_height = $('.cd-header').height(),
			$window_height = $(window).height(),
			$header_top = $window_height - $header_height,
			$window_width = $(window).width();
		$('.cd-blurred-bg').css('clip', 'rect('+$header_top+'px, '+$window_width+'px, '+$window_height+'px, 0px)');
	}
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


