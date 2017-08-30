$(document).ready(function(){

  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();    
    if (scrollTop >= 100) {
      $('.navbar').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('.navbar').removeClass('scrolled-nav');
    } 
    
  }); 


  $('.navbar-toggle').click(function(){
  	$('#title-img').toggleClass("darkImg")
  })

});