$(document).ready(function () {
    $("#lychee-img").css({
      opacity: 0,
      position: "relative",
      top: "50px"
    }).animate({
      opacity: 1,
      top: "0px"
    }, 2000);
  });
  


  $(document).ready(function () {
    function checkIfInView() {
      var faqSection = $('.faq-section');
      var footerSection = $('#footer'); 
      var footerImage = $("#footer_img");
      var windowHeight = $(window).height();
      var faqOffset = faqSection.offset().top; 
      var footerOffset = footerSection.offset().top; 
      var scrollPosition = $(window).scrollTop();
      
      if (scrollPosition + windowHeight > faqOffset) {
        $('.faq-question').each(function (index) {
          $(this).delay(200 * index).queue(function (next) {
            $(this).css({
              opacity: 1,
              transform: 'translateX(0)'
            });
            next();
          });
        });
      }
  
    
      if (scrollPosition + windowHeight > footerOffset) {
        footerImage.css({
          opacity: 0,
          position: 'relative',
          top: '50px'
        }).animate({
          opacity: 1,
          top: '0px'
        }, 1500);
        
      
        $(window).off('scroll', checkIfInView);
      }
    }
  
    $(window).on('scroll', checkIfInView);
    checkIfInView();
  });
  
