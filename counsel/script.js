$(document).ready(function(){
  setTimeout(function() {
    $('#slider').addClass('animate');
  }, 1500);  
  $(window).scroll(function() {    
    if ($(this).scrollTop() > 250) {
        $('#graph').addClass('anim-graph');
    }
    })
  
});