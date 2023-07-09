(function($) {
	
	"use strict";
	var project_carousel_js = function($scope, $) {
		
		// Single item Carousel 
		if ($('.single-item-project-carousel').length) {
			var slider_attr = $('.single-item-project-carousel').data('slider');
			var singleItemCarousel = new Swiper('.single-item-project-carousel', {
				preloadImages: false,
				loop: slider_attr.loop,
				grabCursor: true,
				centeredSlides: false,
				resistance: true,
				resistanceRatio: 0.6,
				speed: 1400,
				spaceBetween: slider_attr.spacebetween,
				parallax: false,
				effect: "slide",
				pagination: {
					el: '.slider__pagination',
					clickable: true,
				  },
				autoplay: {
					delay: 8000,
					disableOnInteraction: false
				},
				navigation: {
					nextEl: '.slider-button-next',
					prevEl: '.slider-button-prev',
				},
			});
		}
			
				
	};
	
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/buildnox_cone_carousel.default', project_carousel_js);
    });	
	

})(window.jQuery);