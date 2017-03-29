function homeInit() {

       $(window).scroll(function() {
      var height = $(window).scrollTop();

      if(height  > 450) {
       $('#scrollParallax').css('background-attachment', 'fixed');
       $('.parallax').css('background-attachment', 'fixed');
      }
     
      else{
        $('#scrollParallax').css('background-attachment', 'inherit');
        $('.parallax').css('background-attachment', 'inherit');
      };
  });
     



}