$('.scroll_to').click(function(e){
        var jump = $(this).attr('href');
        var new_position = $(jump).offset();
       $('html, body').stop().animate({ scrollTop: new_position.top }, 800);
       e.preventDefault();
	});
$('#arrow-to-top-link').click(function() {
	$('body, html').animate({scrollTop:0},600);
	// $('#arrow-to-top-link').animate({opacity:0},600);
});
if($(window).scrollTop() > 100) {
	$('#arrow-to-top-link').animate({opacity:1},600);
} else {
	$('#arrow-to-top-link').animate({opacity:0},600);
}

$(document).ready(function(){
	var firstAnimHeight;
	var secondAnimHeight;
	var thirdAnimHeight;

if ($(this).width() > 940) {
	firstAnimHeight = 100;
	secondAnimHeight = 1100;
	thirdAnimHeight = 2800;
} if (($(this).width() < 940)&&($(this).width() > 720)) {
	firstAnimHeight = 150;
	secondAnimHeight = 1000;
	thirdAnimHeight = 2700;
} else if ($(this).width() < 720)  {
	firstAnimHeight = 300;
	secondAnimHeight = 1500;
	thirdAnimHeight = 3800;
}
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#arrow-to-top-link').fadeIn();
		} else {
			$('#arrow-to-top-link').fadeOut();
		}
		if ($(this).scrollTop() > firstAnimHeight) {
			$('.service').fadeIn().animate({right: 0, opacity: 1},600);
		}
		if ($(this).scrollTop() > secondAnimHeight) {
			$('.portfolio').fadeIn().animate({opacity: 1},800);
			
		}
		if ($(this).scrollTop() > thirdAnimHeight) {
			$('.left-anim-ti').fadeIn().animate({left: 0},600);
			$('.right-anim-ti').fadeIn().animate({right: 0},600);
			
		}
	});

	
	var index = -1
	var $div = $('.team-block .team-av')

	setInterval(function() {
  		$div.eq(index).removeClass('team-av-active')
  		index = (index + 1) % $div.length
  		$div.eq(index).addClass('team-av-active')
	}, 2000)
	
});


