function homeInit() {

 $(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height  < 450){
    $('.stop').css('background-attachment', 'inherit');
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

function changeScreen() {

    var currentPosY = windowMidY + window.pageYOffset,
      position,
      position_top,
      position_left = windowMidX,
      margin_left = - phoneWidth / 2,
      margin_top = - phoneHeight / 2,
      mode;


    transformPhone(position, position_top, position_left, margin_left, margin_top, mode);


  function transformPhone(position, position_top, position_left, margin_left, margin_top, mode) {
    for ( i = 0; i < 4; i++ ) {
      if ( i == mode ) {
        $( '#screen-' + i ).css({"opacity" : "1" });
      }
      else if (i != mode) {
        $( '#screen-' + i ).css({ "opacity" : "0" });
      }
    }
    $( '#floating-phone' ).css({ "display" : "block", "position" : position, "top" : position_top,
      "left" : position_left, "margin-left" : margin_left, "margin-top" : margin_top });
    $( '#floating-phone-scale-image' ).css({ "height" : phoneHeight, "width" : phoneWidth });
    $('.phone-screen').css({"height": phoneHeight, "width": phoneWidth});
  }

}




