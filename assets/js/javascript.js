(function ($) {
    "use strict";   
       jQuery(document).ready(function($){
           
        
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
             //>=, not <=

var navStyle = $(".hero-image").height();
            if (scroll > navStyle-10) {
                //clearHeader, not clearheader - caps H
                $(".header-section").addClass("scrolled");
            }else{
                $(".header-section").removeClass("scrolled");
            }
        });    






       });
       

       /* ==== 14. Preloader ==== */
       $(window).on('load',function(){

       });
       
       
   })(jQuery); 