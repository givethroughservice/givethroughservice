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
  	$('main').toggleClass("darkImg")
  })


  // Ajax Gallery
	var folder = "img/";

	$.ajax({
	    url : folder,
	    success: function (data) {
	        $(data).find("a").attr("href", function (i, val) {
	            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
	                $("#photoRow").append( "<img src='"+ folder + val +"'>" );
	            } 
	        });
	    }
	});

});