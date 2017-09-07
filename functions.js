


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

  $('#myCarousel').carousel({interval: 7000});

  // INSTAFEED

	var userFeed = new Instafeed({
    get: 'user',
    userId: '6005823620',
    accessToken: '6005823620.1677ed0.20cac08d4a63427888f1c53e5eb6cf13',
    resolution: 'standard_resolution',
    sortBy: 'least-recent',
    template: "<div class='item'><img src='{{image}}' title='{{caption}}'><div class='carousel-caption'><p class='caption-text'>{{caption}}</p></div></div>",
    after: function(){
    	$('#myCarousel .carousel-inner .item:first').addClass('active');
    	$('#myCarousel .item').each(function(i){
    		$('.carousel-indicators').append( '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>' );
    	});
    	$('#myCarousel .carousel-indicators li:first').addClass('active');
    }
  });
	userFeed.run();
	

  // Ajax Gallery
	// var folder = "img/";

	// $.ajax({
	//     url : folder,
	//     success: function (data) {
	//         $(data).find("a").attr("href", function (i, val) {
	//             if( val.match(/\.(jpe?g|png|gif)$/) ) { 
	//               $("#myCarousel .carousel-inner").append( "<div class='item'><img src='"+ folder + val +"'></div>" );
	//             	$('#myCarousel .carousel-inner .item:first').addClass('active');
	//             	$('#myCarousel .carousel-indicators').append( '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>' );
	//             	$('#myCarousel .carousel-indicators li:first').addClass('active');
	//             } 
	//         });
	//         $('#myCarousel').carousel('next');
	//     }
	// });

});