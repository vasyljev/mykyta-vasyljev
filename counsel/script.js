$(document).ready(function(){
  setTimeout(function() {
    $('#slider').addClass('animate');
  }, 1500);  
  $(window).scroll(function() {    
        if ($(this).scrollTop() > 250) {
            $('#graph').addClass('anim-graph');
        }
        if ($(this).scrollTop() > 1700) {
            $('.service-img').addClass('anim-service-img');
        }    
    }) 
  
});