$(document).ready(function(){
    setTimeout(function() {
        $('#slider').addClass('animate');
    }, 1500);  
    $('.scroll_to').click(function(e){
        var jump = $(this).attr('href');
        var new_position = $(jump).offset();
       $('html, body').stop().animate({ scrollTop: new_position.top }, 800);
       e.preventDefault();
    });
    var firstAnimHeight;
    var secondAnimHeight;
    var thirdAnimHeight;
    var blockStatus = true;
    $(window).scroll(function() {
        if($(this).width() > 870) {
            firstAnimHeight = 300;
            secondAnimHeight = 1700;
            thirdAnimHeight = 2300;
        } else if ($(this).width() < 870) {
            firstAnimHeight = 400;
            secondAnimHeight = 1900;
            thirdAnimHeight = 3100;
        }  
        if ($(this).scrollTop() > firstAnimHeight) {
            $('#graph').addClass('anim-graph');
        }
        if ($(this).scrollTop() > secondAnimHeight) {
            $('.service-img').addClass('anim-service-img');
        }
       function numbersAnimate(blockName, endValue) {          
            console.log(blockName);
            $({numberValue: 0}).animate({numberValue:  endValue}, { 
                duration: 1000,
                easing: "linear", 
                step: function(val) {  
                    $(blockName).html(Math.ceil(val));
                } 
            })
       }
       if ($(this).scrollTop() > thirdAnimHeight) {           
            $(function () {                 
                if(blockStatus){  
                    blockStatus = false; 
                    numbersAnimate('#first-stat', 7890);
                    numbersAnimate('#second-stat', 9999); 
                    numbersAnimate('#third-stat', 1509);
                    numbersAnimate('#fourth-stat', 5972); 
                }      
            }); 

        }    
    }) 
  
});