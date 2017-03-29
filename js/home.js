function homeInit() {

 $(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height  < 450){
    $('.stop').css('background-attachment', 'fixed');
    $('.screen-1').css('opacity','0');
    $('.screen-2').css('opacity','0');
  }

  // else if(height  > 450) {
  //   $('.stop').css('background-attachment', 'fixed');
  // }
  else ((height  < 600) && (height > 451)){
    $('.screen-0').css('opacity','1');
    $('.screen-1').css('opacity','0');
  }
  else ( (height  > 600) && (height < 800) ) {
    $('.screen-0').css('opacity','0');
    $('.screen-1').css('opacity','1');
  }
  
  else ((height  > 801) && (height < 1200)) {
    $('.screen-1').css('opacity','0');
    $('.screen-2').css('opacity','1');
  }
  // else if (height  < 800) {
  //   $('.screen-2').css('opacity','0');
  // }
});

// parallax
(function($){

            //Plugin activation
            $(window).enllax();

          })(jQuery);
}





