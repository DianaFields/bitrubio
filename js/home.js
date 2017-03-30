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
        var change = true;
        var changea = true;
        function changeScreen(){
          $(window).scroll(function(){
            var showMessageInterval = window.setInterval(showMessageIfNeeded, 500);
           function showMessageIfNeeded() {
            var scrollTop = $(window).scrollTop();
            var firstScreen = $("#bloque-1").offset().top;
            var secondScreen = $("#bloque-2").offset().top;
            if (scrollTop > firstScreen) {
              if (change) {
               $('#screen-1').css('opacity','1')
               window.clearInterval(showMessageInterval);
               change = false;
             }
           }
           if (scrollTop < firstScreen) {
            if (change == false) {
             $('#screen-1').css('opacity','0')
             window.clearInterval(showMessageInterval);
             change = true;
           }
         }
    // 
    if (scrollTop > secondScreen) {
      if (changea) {
       $('#screen-1').css('opacity','0')
       $('#screen-2').css('opacity','1')
       window.clearInterval(showMessageInterval);
       changea = false;
     }
   }
   if (scrollTop < secondScreen) {
    if (changea == false) {
     $('#screen-2').css('opacity','0')
     window.clearInterval(showMessageInterval);
     changea = true;
   }
 }

}
});
        }
