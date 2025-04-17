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
      var footerSection = $('#footer');  // Assuming your footer has the id "footer"
      var footerImage = $("#footer_img");
      var windowHeight = $(window).height();
      var faqOffset = faqSection.offset().top;  // FAQ section offset
      var footerOffset = footerSection.offset().top;  // Footer section offset
      var scrollPosition = $(window).scrollTop();
      
      // If the FAQ section is in view, animate FAQ questions
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
  
      // If the footer section is in view, animate the footer image
      if (scrollPosition + windowHeight > footerOffset) {
        footerImage.css({
          opacity: 0,
          position: 'relative',
          top: '50px'
        }).animate({
          opacity: 1,
          top: '0px'
        }, 1500);
        
        // Unbind the scroll event once the image animation is triggered
        $(window).off('scroll', checkIfInView);
      }
    }
  
    // Trigger the function on scroll
    $(window).on('scroll', checkIfInView);
    
    // Also call the function once on page load in case the section is already in view
    checkIfInView();
  });
  
