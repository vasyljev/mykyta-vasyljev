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
			$('.portfolio').fadeIn().animate({opacity: 1, bottom: 0},800);
			
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

	var inputBox = document.getElementById('email-imp');
	var button = document.getElementById('subscribe-btn');	
	button.addEventListener('click', openWindow, false);
	var newWindow = document.createElement('div');
	
	function openWindow() {			
		if(inputBox.value == '')	{
			newWindow.innerHTML = '<div id="new-window"><div id="inner-block"><p>Field is empty!</p><p>Please, enter your E-Mail!</p><div id="ok-button">ok</div></div></div>';
			document.body.appendChild(newWindow);		
			newWindow.addEventListener('click', closeWindow, false);
			console.log(inputBox.value);
			event.preventDefault();
		}				
	}

	function closeWindow() {
		var newOpenWindow = document.getElementById('new-window');
		var okButton = document.getElementById('ok-button');
		var clickTarget = getTarget(event);
		if(clickTarget == okButton || clickTarget == newOpenWindow) {
			document.body.removeChild(newWindow);
		}		
	}	
	function getTarget(e) {
		return e.target;
	}
	var portfolioButton1 = document.getElementById('portfolio-btn-1');
	var portfolioButton2 = document.getElementById('portfolio-btn-2');
	var portfolioButton3 = document.getElementById('portfolio-btn-3');
	var portfolioButton4 = document.getElementById('portfolio-btn-4');
	var portfolioButton5 = document.getElementById('portfolio-btn-5');
	var portfolioButton6 = document.getElementById('portfolio-btn-6');
	var portfolioBlock = document.getElementsByClassName('portfolio');
	portfolioBlock[0].addEventListener('click', showPotfolioDescription, false);
	function showPotfolioDescription() {
		var target = getTarget(event);
		var xhr = new XMLHttpRequest();
		var jsonValue;	
		function buildBlock() {			
				event.preventDefault();			
				xhr.open('GET', jsonValue, true);
				xhr.send(null);
				xhr.onload = ajaxOnLoad;
				portfolioBlock[0].classList.add('portfolio-small');
				var new_position = $('#our-works-link').offset();
				$('html, body').stop().animate({ scrollTop: new_position.top }, 400);				
		}	
		if(target == portfolioButton1) {			
			jsonValue = 'ajax/portfolio-1.json';
			buildBlock();
		} else if (target == portfolioButton2) {			
			jsonValue = 'ajax/portfolio-2.json';
			buildBlock();
		} else if (target == portfolioButton3) {			
			jsonValue = 'ajax/portfolio-3.json';
			buildBlock();
		} else if (target == portfolioButton4) {			
			jsonValue = 'ajax/portfolio-4.json';
			buildBlock();
		} else if (target == portfolioButton5) {			
			jsonValue = 'ajax/portfolio-5.json';
			buildBlock();
		} else if (target == portfolioButton6) {			
			jsonValue = 'ajax/portfolio-6.json';
			buildBlock();
		}
		
		function ajaxOnLoad() {
			if(xhr.status != 200) {
				alert('ERROR! ' + xhr.status + xhr.statusText);
			} else {
				var portfolioDescriptionObject = JSON.parse(xhr.responseText);
				var portfolioDescriptionText = '<img src="' + portfolioDescriptionObject.adress +'" alt="IMG-1"><div class="left-side"><img src="img/close-field.png" alt="Close" id="close-portfolio-description"><div class="portfolio-content">'+ portfolioDescriptionObject.content +'</div></div></div>'
				var portfolioDescriptionHtml = document.createElement('div');
				portfolioDescriptionHtml.setAttribute('id', 'portfolio-img-description');
				portfolioDescriptionHtml.innerHTML = portfolioDescriptionText;
				var portfolioBlockParent = portfolioBlock[0].parentNode;
				portfolioBlockParent.insertBefore(portfolioDescriptionHtml, portfolioBlock[0]);
				var closePortfolioButton = document.getElementById('close-portfolio-description');
				closePortfolioButton.addEventListener('click', function() {
					portfolioBlockParent.removeChild(portfolioDescriptionHtml);
					portfolioBlock[0].classList.remove('portfolio-small');
				}, false);
				
			} 
		}
	}

});	