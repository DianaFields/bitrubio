function homeInit() {

       $(window).scroll(function() {
      var height = $(window).scrollTop();

      if(height  > 450) {
       $('#scrollParallax').css('background-attachment', 'fixed');
       $('.screen-1').css('background-attachment', 'fixed');
      }
     
      else{
        $('#scrollParallax').css('background-attachment', 'inherit');
        $('.screen-1').css('background-attachment', 'inherit');
      };
       if(height > 1200){
         $('.screen-1').css('opacity', '0');
      }
      else{
        $('.screen-1').css('opacity', '100');
      };
  });
     



}