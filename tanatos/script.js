$(document).ready(function(){
	$('.scroll_to').click(function(e){
        var jump = $(this).attr('href');
        var new_position = $(jump).offset();
       $('html, body').stop().animate({ scrollTop: new_position.top }, 800);
       e.preventDefault();
	});
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
	
	function openWindow(event) {	
		event=event||window.event;			
		if(inputBox.value == '')	{
			newWindow.innerHTML = '<div id="new-window"><div id="inner-block"><p>Field is empty!</p><p>Please, enter your E-Mail!</p><div id="ok-button">ok</div></div></div>';
			document.body.appendChild(newWindow);		
			newWindow.addEventListener('click', closeWindow, false);
			console.log(inputBox.value);
			event.preventDefault();				
		}				
	}

	function closeWindow(event) {
		event=event||window.event;
		var newOpenWindow = document.getElementById('new-window');
		var okButton = document.getElementById('ok-button');
		var clickTarget = getTarget(event);
		if(clickTarget == okButton || clickTarget == newOpenWindow) {
			document.body.removeChild(newWindow);
		}		
	}	
	function getTarget(event) {	
		var event = event || window.event;	
		return event.target;
	}
	var portfolioButton1 = document.getElementById('portfolio-btn-1');
	var portfolioButton2 = document.getElementById('portfolio-btn-2');
	var portfolioButton3 = document.getElementById('portfolio-btn-3');
	var portfolioButton4 = document.getElementById('portfolio-btn-4');
	var portfolioButton5 = document.getElementById('portfolio-btn-5');
	var portfolioButton6 = document.getElementById('portfolio-btn-6');
	var portfolioBlock = document.getElementsByClassName('portfolio');
	portfolioBlock[0].addEventListener('click', showPotfolioDescription, false);
	function showPotfolioDescription(event) {
		var event = event || window.event;
		var target = event.target;
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
					portfolioDescriptionHtml.classList.add('portfolio-hide');
					setTimeout(function() {
						portfolioBlockParent.removeChild(portfolioDescriptionHtml);
					}, 700);					
					portfolioBlock[0].classList.remove('portfolio-small');
				}, false);				
			} 
		}
	}
	
	var headerTag = document.getElementsByTagName('header');
	var headerBackground = document.getElementById('header-background');
	headerTag[0].addEventListener('mouseover', function() {
		return scaleBackground(headerBackground, headerTag[0]);
	}, false);
	
	var newsletterSection = document.getElementsByClassName('newsletter');
	var newsletterBackground = document.getElementById('newsletter-background');
	newsletterSection[0].addEventListener('mouseover', function() {
		return scaleBackground(newsletterBackground, newsletterSection[0]);
	}, false);
	var clientSection = document.getElementsByClassName('client');
	var clientBackground = document.getElementById('client-background');
	clientSection[0].addEventListener('mouseover', function() {
		return scaleBackground(clientBackground, clientSection[0]);
	}, false);

	function scaleBackground(attr, mainAttr) {		
		attr.style = '-webkit-transform: scale3d(1.3,1.3,1.3); transform: scale3d(1.3,1.3,1.3);';		
		mainAttr.addEventListener('mousemove', function(event) {
			var event = event || window.event;
			var mousePositionX =100 - event.clientX*0.05, mousePositionY = 100 - event.clientY*0.05;
			attr.style = '-webkit-transform: scale3d(1.3,1.3,1.3); transform: scale3d(1.3,1.3,1.3); -webkit-transform-origin:'+ mousePositionX + '% ' + mousePositionY + '%; transform-origin:'+ mousePositionX + '% ' + mousePositionY + '%;';
		},false);
		mainAttr.addEventListener('mouseout', function(event) {
			var event = event || window.event;
			attr.style = '-webkit-transform: scale3d(1,1,1); transform: scale3d(1,1,1); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%;';
			mainAttr.removeEventListener('mousemove', function(event) {
				var event = event || window.event;
				var mousePositionX =100 - event.clientX*0.05, mousePositionY = 100 - event.clientY*0.05;
				attr.style = '-webkit-transform: scale3d(1.3,1.3,1.3); transform: scale3d(1.3,1.3,1.3); -webkit-transform-origin:'+ mousePositionX + '% ' + mousePositionY + '%; transform-origin:'+ mousePositionX + '% ' + mousePositionY + '%;';
			});
		}, false);
	}
});	