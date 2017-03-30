function homeInit() {

 $(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height  < 450){
    $('.stop').css('background-attachment', 'inherit');
     $('.screen-1').css('opacity', '0');
  }
  else if(height  > 450) {
    $('.stop').css('background-attachment', 'fixed');
  }
});



// parallax
(function($){

            //Plugin activation
            $(window).enllax();

          })(jQuery);
}

function homeInit2() {

 $(window).scroll(function() {
  var heightNew = $(window).scrollTop();
  if (heightNew  > 450){
    $('.screen-0').css('opacity', '0');
    $('.screen-1').css('opacity', '1');
  }
  else(height  < 450) {
     $('.screen-0').css('opacity', '1');
    $('.screen-1').css('opacity', '0');
  }
});



}





