function homeInit() {



// parallax
(function($){
            //Plugin activation
            $(window).enllax();

          })(jQuery);
        }
        var change = true;
        var changeAgain = true;

        function changeScreen(){
          $(window).scroll(function(){
            // fixed
             var height = $(window).scrollTop();
            if (height  < 430){
              $('.stop').css('background-attachment', 'inherit');
              $('.parallax').css('background-attachment', 'inherit');
            }
            else if(height  > 430) {
              $('.stop').css('background-attachment', 'fixed');
              $('.parallax').css('background-attachment', 'fixed');
            }
            // fixed


            var showMessageInterval = window.setInterval(showMessageIfNeeded, 500);
            function showMessageIfNeeded() {
              var scrollTop = $(window).scrollTop();
              var firstScreen = $("#bloque-1").offset().top;
               var secondScreen = $("#bloque-2").offset().top;
              if (scrollTop > firstScreen) {
                if (change) {
                 $('#screen-1').css('opacity','1')
                 // $('#screen-0').css('opacity','0')
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

}
});
        }
