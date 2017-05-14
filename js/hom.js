function homeInit() {
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });
// parallax
(function($){
            //Plugin activation
            $(window).enllax();
          })(jQuery);
        }
        var change = true;
        var changeAgain = true;
        var changeTwice = true;
        var changeLast = true;
        var changeHide = true;
        var changePrx = true;
        function changeScreen(){
          $('#screen-0').addClass('initial');
          $('.conocer').css('margin-top', '2.5em');
          $(window).scroll(function(){
            // fixed
            var height = $(window).scrollTop();
            if (height  < 250){
              $('.stop').css('position', 'inherit');
              $('.parallax').css('background-attachment', 'inherit');
              $('#screen-0').addClass('initial');
              $('.conocer').css('margin-top', '3em');
            }
            else if(height  > 250) {
              $('.stop').css('position', 'fixed');
              $('.parallax').css('background-attachment', 'fixed');
              $('.tools').css('background-attachment', 'fixed');
              $('.conocer').css('margin-top', '2em');
              $('#screen-0').removeClass('initial');
            }
            if (height  > 4300){
              $('.stop').css('position', 'inherit');
              $('.parallax').css('background-attachment', 'inherit');
              $('.hide').css('opacity', '0');
              $('#screen-3').css('margin-top', '-25%');
            }
            else if (height  < 4300){
              $('#screen-3').css('margin-top', 'inherit');
              $('.hide').css('opacity', '1');
            }
            // fixed


            var showMessageInterval = window.setInterval(showMessageIfNeeded, 500);
            function showMessageIfNeeded() {
              var scrollTop = $(window).scrollTop();
              var firstScreen = $("#bloque-1").offset().top;
              var secondScreen = $("#bloque-2").offset().top;
              var thirdScreen = $("#bloque-3").offset().top;
              var fourScreen = $("#bloque-4").offset().top;
              var fiveScreen = $("#bloque-5").offset().top;
              var tope = $("#tope").offset().top;
              var prx = $("#parallax").offset().top;
              if (scrollTop > 700) {
                if (change) {
                  $('#screen-0').css('opacity','0');
                  $('#screen-1').css('opacity','1');
                  $('#screen-2').css('opacity','0');
                  $('#screen-3').css('opacity','0');
                  $('.talkbubble-1').css('opacity','1');
                  window.clearInterval(showMessageInterval);
                  change = false;
                }
              }
              if (scrollTop < firstScreen) {
                if (change == false) {
                 $('#screen-1').css('opacity','0');
                 $('#screen-0').css('opacity','1');
                 $('#screen-2').css('opacity','0');
                 $('#screen-3').css('opacity','0');
                 window.clearInterval(showMessageInterval);
                 change = true;
               }
             }
    // 
    if (scrollTop > secondScreen) {
      if (changeAgain) {
       $('#screen-1').css('opacity','0');
       $('#screen-2').css('opacity','1');
       $('video')[0].play();
       window.clearInterval(showMessageInterval);
       changeAgain = false;
     }
   }
   if (scrollTop < secondScreen) {
    if (changeAgain == false) {
     $('#screen-2').css('opacity','0');
     $('#screen-1').css('opacity','1');

     window.clearInterval(showMessageInterval);
     changeAgain = true;
   }
 }
  // 
  if (scrollTop > thirdScreen) {
    if (changeTwice) {
     $('#screen-3').css('opacity','1');
     $('#screen-2').css('opacity','0');
     $('#screen-1').css('opacity','0');

     window.clearInterval(showMessageInterval);
     changeTwice = false;
   }
 }
 if (scrollTop < thirdScreen & scrollTop > secondScreen)  {
  if (changeTwice == false) {
   $('#screen-2').css('opacity','1');
   $('#screen-3').css('opacity','0');
  $('#screen-1').css('opacity','0');

   window.clearInterval(showMessageInterval);
   changeTwice = true;
 }
}
if (scrollTop  > fourScreen){
  $('.hide').css('opacity', '0');
  window.clearInterval(showMessageInterval);
  changeHide = true;
}
else if(scrollTop  < fourScreen ){
  $('.hide').css('opacity', '1');
  window.clearInterval(showMessageInterval);
  changeHide = true;
}

}
});

// iphone resize
$(window).resize( function(){
    var height = $(window).height();
    var width = $(window).width(); 
    var ob = $('.iphone');
    if( width > height ) {
        if( ob.hasClass('portrait') ) {
            ob.removeClass('portrait').addClass('landscape');
        }
    }else{
        if( ob.hasClass('landscape') ) {
            ob.removeClass('landscape').addClass('portrait');
        }
    }
});
// video resize
$(window).resize( function(){
    var height = $(window).height();
    var width = $(window).width(); 
    var video = $('.video-mobile');
    if( width > height ) {
        if( video.hasClass('port') ) {
            video.removeClass('port').addClass('lands');
        }
    }else{
        if( video.hasClass('lands') ) {
            video.removeClass('lands').addClass('port');
        }
    } 
});
// envelope resize
$(window).resize( function(){
    var height = $(window).height();
    var width = $(window).width(); 
    var envelope = $('.envelope');
    if( width > height ) {
        if( envelope.hasClass('envelope')) {
            envelope.addClass('envelope-land');
        }
    }else{
        if( envelope.hasClass('envelope-land') ) {
            envelope.removeClass('envelope-land');
        }
    }
});
  }

  // on tap change screen
 function tappingChange(){
  $(".button-fake").click(function(){
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 8000);
  });
 }




