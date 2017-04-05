function homeInit() {
// parallax
(function($){
            //Plugin activation
            $(window).enllax();

          })(jQuery);
        }
        var change = true;
        var changeAgain = true;
        var changeTwice = true;

        function changeScreen(){
          $('#screen-0').css('padding-top', '200px');
          $('.conocer').css('margin-top', '2.5em');
          $(window).scroll(function(){
            // fixed
             var height = $(window).scrollTop();
         
            if (height  < 250){
              $('.stop').css('position', 'inherit');
              $('.parallax').css('background-attachment', 'inherit');
              $('#screen-0').css('padding-top', '250px');
               $('.conocer').css('margin-top', '3em');
            }
            else if(height  > 250) {
              $('.stop').css('position', 'fixed');
              $('.parallax').css('background-attachment', 'fixed');
              $('.tools').css('background-attachment', 'fixed');
              $('#screen-0').css('padding-top', '0');
               $('.conocer').css('margin-top', '0');
              
            }
            if (height  > 3600){
              $('.stop').css('position', 'inherit');
              $('.parallax').css('background-attachment', 'inherit');
            }
            // fixed


            var showMessageInterval = window.setInterval(showMessageIfNeeded, 500);
            function showMessageIfNeeded() {
              var scrollTop = $(window).scrollTop();
              var firstScreen = $("#bloque-1").offset().top;
              var secondScreen = $("#bloque-2").offset().top;
              var videoScreen = $("#bloque-3").offset().top;
              if (scrollTop > 700) {
                if (change) {
                  $('#screen-0').css('opacity','0');
                  $('#screen-1').css('opacity','1');
                  $('.talkbubble-1').css('opacity','1');
                 window.clearInterval(showMessageInterval);
                 change = false;
               }
             }
             if (scrollTop < firstScreen) {
              if (change == false) {
               $('#screen-1').css('opacity','0')
               $('#screen-0').css('opacity','1')
               window.clearInterval(showMessageInterval);
               change = true;
             }
           }
    // 
    if (scrollTop > secondScreen) {
      if (changeAgain) {
       $('#screen-1').css('opacity','0')
       $('#screen-2').css('opacity','1')
       window.clearInterval(showMessageInterval);
       changeAgain = false;
      }
    }
    if (scrollTop < secondScreen) {
      if (changeAgain == false) {
     $('#screen-2').css('opacity','0')
     $('#screen-1').css('opacity','1')
     window.clearInterval(showMessageInterval);
     changeAgain = true;
    }
  }
  // 
    if (scrollTop > videoScreen) {
      if (changeTwice) {
       $('#screen-2').css('opacity','0')
       $('#screen-3').css('opacity','1')
       $('video')[0].play();
       window.clearInterval(showMessageInterval);
       changeTwice = false;
      }
    }
    if (scrollTop < videoScreen & scrollTop > secondScreen)  {
      if (changeTwice == false) {
     $('#screen-3').css('opacity','0')
     $('#screen-2').css('opacity','1')

     window.clearInterval(showMessageInterval);
     changeTwice = true;
    }
  }

}
});
        }
