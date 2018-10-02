jQuery('.scroll_to').click(function(e){
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

	$(".comment-notes").text('Коментар для зворотнього зв\'язку');
	//$("#reply-title").text('Ваш отклик');
	$("label[for='author']").text("Ваше ім\'я");
	$("label[for='email']").text("Електронна пошта");
	$("label[for='comment']").text("Повідомлення");
 	$("#submit").attr('value', 'Відправити коментар');
});