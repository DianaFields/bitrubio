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
        var changeLast = true;
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
            if (height  > 4100){
              $('.stop').css('position', 'inherit');
              $('.parallax').css('background-attachment', 'inherit');
              $('.hide').css('opacity', '0');
              $('#screen-3').css('margin-top', '-25%');
            }
            else if (height  < 4100){
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
              var tope = $("#tope").offset().top;
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
      
       window.clearInterval(showMessageInterval);
       changeTwice = false;
      }
    }
    if (scrollTop < thirdScreen & scrollTop > secondScreen)  {
      if (changeTwice == false) {
     $('#screen-2').css('opacity','1');
     $('#screen-3').css('opacity','0');

     window.clearInterval(showMessageInterval);
     changeTwice = true;
    }
  }
  if (scrollTop  > tope){
  }
  else if(scrollTop  < tope){
  }



  // 
  //   if (scrollTop > fourScreen) {
  //     if (changeLast) {
  //      $('#screen-2').css('opacity','0')
  //      $('#screen-3').css('opacity','1')
  //      window.clearInterval(showMessageInterval);
  //      changeLast = false;
  //     }

  //   }
  //   if (scrollTop < fourScreen & scrollTop > thirdScreen)  {
  //     if (changeLast == false) {
  //    $('#screen-1').css('opacity','1')
  //    $('#screen-3').css('opacity','0')

  //    window.clearInterval(showMessageInterval);
  //    changeLast = true;
  //   }
  // }

}
});
        }

        function envelope(){
          /* Trigger Animation */
$('a').on('click', function() {
    $('.sobre').addClass('is-active');
    $(this).remove();
});

        }
