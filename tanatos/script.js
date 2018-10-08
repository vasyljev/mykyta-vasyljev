$('.scroll_to').click(function(e){
        var jump = $(this).attr('href');
        var new_position = $(jump).offset();
       $('html, body').stop().animate({ scrollTop: new_position.top }, 800);
       e.preventDefault();
    });

$(document).ready(function(){

	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#arrow-to-top-link').fadeIn();
		} else {
			$('#arrow-to-top-link').fadeOut();
		}
	});

	$('#arrow-to-top-link').click(function() {
		$('body, html').animate({scrollTop:0},800);
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.service').fadeIn().animate({right: 0, opacity: 1},600);
		}
		if ($(this).scrollTop() > 1000) {
			$('.portfolio').fadeIn().animate({opacity: 1},800);
			
		}
		if ($(this).scrollTop() > 2800) {
			$('.left-anim-ti').fadeIn().animate({left: 0},800);
			$('.right-anim-ti').fadeIn().animate({right: 0},800);
			
		}
	}); 	
	
});


