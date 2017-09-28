


$(document).ready(function(){

	$('#title-img-sec').addClass('isShowing');
	$('#intro-text').addClass('isShowing');

  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();  
    // console.log(scrollTop);  
    if (scrollTop >= 100) {
      $('.navbar').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('.navbar').removeClass('scrolled-nav');
    } 
    
    if(scrollTop >= 700){
    	$('#video').addClass('isShowing');
    }
    if(scrollTop >= 1100){
    	$('#logo-banner').addClass('isShowing');
    }
    if(scrollTop >= 1300){
    	$('#gallery').addClass('isShowing');
    }
    if(scrollTop >= 1500){
    	$('#instafeed2').addClass('isShowing');
    }
  }); 


  $('.navbar-toggle').click(function(){
  	$('main').toggleClass("darkImg")
  })

  $('#myCarousel').carousel({interval: 7000});

  // INSTAFEED

	var userFeed = new Instafeed({
		target: 'instafeed1',
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

    	// Set height of controls
    	resizeControls();
    }
  });



	
	var thumbFeed = new Instafeed({
		target: 'instafeed2',
    get: 'user',
    userId: '6005823620',
    accessToken: '6005823620.1677ed0.20cac08d4a63427888f1c53e5eb6cf13',
    resolution: 'thumbnail',
    sortBy: 'least-recent',
    template: "<li><img src='{{image}}' /></li>",
		after: function(){
			;(function(window, $, undefined) {

	var conf = {
		center: true,
		backgroundControl: false
	};

	var cache = {
		$carouselContainer: $('.thumbnails-carousel').parent(),
		$thumbnailsLi: $('.thumbnails-carousel li'),
		$controls: $('.thumbnails-carousel').parent().find('.carousel-control')
	};

	function init() {
		cache.$carouselContainer.find('ol.carousel-indicators').addClass('indicators-fix');
		cache.$thumbnailsLi.first().addClass('active-thumbnail');

		if(!conf.backgroundControl) {
			cache.$carouselContainer.find('.carousel-control').addClass('controls-background-reset');
		}
		else {
			cache.$controls.height(cache.$carouselContainer.find('.carousel-inner').height());
		}

		if(conf.center) {
			cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
		}
	}

	function refreshOpacities(domEl) {
		cache.$thumbnailsLi.removeClass('active-thumbnail');
		cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
	}	

	function bindUiActions() {
		cache.$carouselContainer.on('slide.bs.carousel', function(e) {
  			refreshOpacities(e.relatedTarget);
		});

		cache.$thumbnailsLi.click(function(){
			cache.$carouselContainer.carousel($(this).index());
		});
	}

	$.fn.thumbnailsCarousel = function(options) {
		conf = $.extend(conf, options);

		init();
		bindUiActions();

		return this;
	}

})(window, jQuery);
			$('.thumbnails-carousel').thumbnailsCarousel();
		}
	});
  
	userFeed.run();
	thumbFeed.run();



$(window).resize(resizeControls);

});
// .ready();


function resizeControls(){
	var imgHeight = $('#gallery .carousel-inner img').height();
	imgHeight += 4;
	$('#gallery #myCarousel .carousel-control').css({
		height: imgHeight
	});
}


$('#gts-video').click(function(){
	this.paused?this.play():this.pause();
});

function makeFullScreen(divObj) {
  if (!document.fullscreenElement && // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (divObj.requestFullscreen) {
      divObj.requestFullscreen();
    } else if (divObj.msRequestFullscreen) {
      divObj.msRequestFullscreen();
    } else if (divObj.mozRequestFullScreen) {
      divObj.mozRequestFullScreen();
    } else if (divObj.webkitRequestFullscreen) {
      divObj.webkitRequestFullscreen();
    } else {
      console.log("Fullscreen API is not supported");
    }

  } else {

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }

  }
}