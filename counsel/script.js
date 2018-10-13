$(document).ready(function(){
  setTimeout(function() {
    $('#slider').addClass('animate');
  }, 1500);  
  var blockStatus = true;
  $(window).scroll(function() {    
        if ($(this).scrollTop() > 290) {
            $('#graph').addClass('anim-graph');
        }
        if ($(this).scrollTop() > 1700) {
            $('.service-img').addClass('anim-service-img');
        }
       
        if ($(this).scrollTop() > 2300) {           
            $(function () {                 
                if(blockStatus){  
                    blockStatus = false;                 
                    $({numberValue: 0}).animate({numberValue: 7890}, { 
                        duration: 1000,
                        easing: "linear", 
                        step: function(val) {  
                            $("#first-stat").html(Math.ceil(val));
                        } 
                    });
                    $({numberValue: 0}).animate({numberValue: 9999}, { 
                        duration: 1000,
                        easing: "linear", 
                        step: function(val) {  
                            $("#second-stat").html(Math.ceil(val));
                        } 
                    });
                    $({numberValue: 0}).animate({numberValue: 1509}, { 
                        duration: 1000,
                        easing: "linear", 
                        step: function(val) {  
                            $("#third-stat").html(Math.ceil(val));
                        } 
                    });
                    $({numberValue: 0}).animate({numberValue: 5972}, { 
                        duration: 1000,
                        easing: "linear", 
                        step: function(val) {  
                            $("#fourth-stat").html(Math.ceil(val));
                        } 
                    });
                }      
            }); 

        }    
    }) 
  
});